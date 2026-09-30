# Part 2: Modulith

In this part we'll introduce the app in a scaled form.

# Steps

The practical steps taken during this part.

## 1. Installation

Open a terminal and run:

```bash
npm ci
```

## 2. Build and run

Execute the following commands:

```bash
npm run build
npm run dev
```

Open two a new terminal and run the following commands:

```bash
cd src/bar
npm run dev
```

In another new terminal, run the following commands:

```bash
cd src/terrace
npm run dev
```

Open a browser and go to `http://localhost:5174` and use another tab for `http://localhost:5175`.

## 3. Explore the application

The application and the source code will be explained during the workshop.

## 4. Split off the persistence logic

The domain and persistence logic run on the same server. For security reasons we want the persistence to run on a separate server.

First, we'll need to create new segment for both subdomains.

Create a new segment file `segments/bar.persistence.json`:

```json
{
    "./bar/domain/order/_retrieveByNumber/retrieve": { "default": { "access": "protected" } },
    "./bar/domain/order/close/persist": { "default": { "access": "protected" } },
    "./bar/domain/order/create/persist": { "default": { "access": "protected" } },
    "./bar/domain/order/getOpen/retrieve": { "default": { "access": "protected" } },
    "./bar/domain/order/prepareProduct/persist": { "default": { "access": "protected" } }
}
```

And one for the terrace domain `segments/terrace.persistence.json`:

```json
{
    "./terrace/domain/order/_retrieveByNumber/retrieve": { "default": { "access": "protected" } },
    "./terrace/domain/order/addProduct/persist": { "default": { "access": "protected" } },
    "./terrace/domain/order/create/persist": { "default": { "access": "protected" } },
    "./terrace/domain/order/getOpenByTable/retrieve": { "default": { "access": "protected" } },
    "./terrace/domain/order/removeProduct/persist": { "default": { "access": "protected" } },
    "./terrace/domain/order/send/persist": { "default": { "access": "protected" } },

    "./terrace/domain/product/getAll/retrieve": { "default": { "access": "protected" } },
    "./terrace/domain/product/getByCode/retrieve": { "default": { "access": "protected" } }
}
```

Stop the dev server (Ctrl-C), and rebuild the application from the project root:

```bash
npm run build
```

## 5. Update dev configuration

To include the new segments for the dev server, add the newly created segments to the `services/development/worker.json`:

```json
"segments": [
    "terrace.domain",
    "terrace.persistence",
    "bar.domain",
    "bar.persistence"
],
```

Restart the dev server:

```bash
npm run dev
```

## 6. Update production configuration

In production mode, the application runs as a set of services. These new persistence services need to be added.

Create the file `services/production/bar-persistence.json`:

```json
{
    "url": "http://127.0.0.1:3220",
    "worker":
    {
        "gateway": "http://127.0.0.1:3000",
        "trustKey": "secret",
        "segments": [
            "bar.persistence"
        ]
    }
}
```

And the file `services/production/terrace-persistence.json`:

```json
{
    "url": "http://127.0.0.1:3120",
    "setUp": [
        "./terrace/scripts/seed"
    ],
    "worker":
    {
        "gateway": "http://127.0.0.1:3000",
        "trustKey": "secret",
        "segments": [
            "terrace.persistence"
        ]
    }
}
```

The production setup runs using pm2. Add both services to `ecosystem.config.cjs`:

```js
{
    name: "terrace-persistence",
    script: "./node_modules/jitar/dist/cli.js",
    args: "start --service=services/production/terrace-persistence.json",
    interpreter: "node",
    autorestart: true,
    restart_delay: 1000
},
{
    name: "bar-persistence",
    script: "./node_modules/jitar/dist/cli.js",
    args: "start --service=services/production/bar-persistence.json",
    interpreter: "node",
    autorestart: true,
    restart_delay: 1000
}
```

Stop all running dev servers (Ctrl+C) and start the distributed production ecosystem.

```bash
npm run prod-start
npm run prod-monitor
```

Go the browser and go to `http://localhost:3100` and `http://localhost:3200`.