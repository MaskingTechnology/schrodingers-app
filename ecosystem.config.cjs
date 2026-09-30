module.exports = {
  apps: [
    {
      name: "terrace-domain",
      script: "./build/common/infrastructure/bootstrap.js",
      args: "--port=3110 --init=./segments/production/terrace.domain.json",
      interpreter: "node"
    },
    {
      name: "terrace-app",
      script: "./node_modules/local-web-server/bin/cli.js",
      args: "--directory build/terrace/app --spa index.html --port 3100 --rewrite '/terrace/(.*) -> http://localhost:3110/terrace/$1'",
      interpreter: "node"
    },
    {
      name: "bar-domain",
      script: "./build/common/infrastructure/bootstrap.js",
      args: "--port=3210 --init=./segments/production/bar.domain.json",
      interpreter: "node"
    },
    {
      name: "bar-app",
      script: "./node_modules/local-web-server/bin/cli.js",
      args: "--directory build/bar/app --spa index.html --port 3200 --rewrite '/bar/(.*) -> http://localhost:3210/bar/$1'",
      interpreter: "node"
    }
  ]
};