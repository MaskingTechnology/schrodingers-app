# Part 1: Monolith

In this part we'll introduce the app in its simplest form: a monolith consisting of an app and domain logic.

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
npm run dev-app
```

Open a browser and go to `http://localhost:5174`.

## 3. Explore the application

The application and the source code will be explained during the workshop.

## 4. Extend the application

Removing products from an order doesn't work yet. Let's fix it.

```ts
// src/app/components/order/hooks/useOrder.ts

// add this import
import removeProductFromOrder from '^/domain/order/removeProduct';

// implement the removeProduct function
const removeProduct = async (productCode: string) =>
{
    if (order === undefined) return;

    const updatedOrder = await removeProductFromOrder(order.number, productCode);

    setOrder(updatedOrder);
};
```

After saving the file, removing a product now works.

## 5. Move domain logic to backend

The application fully runs in the browser, including the database. Each refresh empties the order. Let's change that.

First, we'll define deployment boundaries.

Starting with all domain logic in `segments/domain.json`:

```json
{
    "./domain/order/addProduct": { "default": { "access": "public" } },
    "./domain/order/create": { "default": { "access": "public" } },
    "./domain/order/getByNumber": { "default": { "access": "public" } },
    "./domain/order/getOpenByTable": { "default": { "access": "public" } },
    "./domain/order/removeProduct" : { "default": { "access": "public" } },
    "./domain/order/send": { "default": { "access": "public" } },

    "./domain/product/getAll": { "default": { "access": "public" } },
    "./domain/product/getByCode": { "default": { "access": "public" } }
}
```

The errors need to be added to `segments/errors.json`:

```json
{
    "./domain/order/_retrieveByNumber/UnknownNumber": { "default": { } },
    "./domain/order/removeProduct/ProductNotFound": { "default": { } },

    "./domain/product/getByCode/UnknownCode": { "default": { } }
}
```

The backend configuration needs a seed for the database. Add the following to `services/worker.json`:

```json
"setUp": [
    "scripts/seed"        
],
```

## 6. Verify

Stop the Vite dev-server (Ctrl+C).

```bash
npm run build
npm run dev-domain
```

Open a new terminal and start the app.

```bash
npm run dev-app
```

Go back to the browser and refresh the app. Open the Developer Tools and check the network tab to verify that the domain logic is coming from the backend.
