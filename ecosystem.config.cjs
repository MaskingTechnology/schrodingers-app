module.exports = {
  apps: [
    {
      name: "gateway",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=services/production/gateway.json",
      interpreter: "node",
    },
    {
      name: "domain",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=services/production/domain.json",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    },
    {
      name: "terrace-persistence",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=services/production/terrace-persistence.json",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    },
    {
      name: "terrace-app",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=services/production/terrace-app.json",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    },
    {
      name: "terrace-proxy",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=services/production/terrace-proxy.json",
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
    },
    {
      name: "bar-app",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=services/production/bar-app.json",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    },
    {
      name: "bar-proxy",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=services/production/bar-proxy.json",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    }
  ]
};