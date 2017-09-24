module.exports = {
  apps : [{
    name        : "desktop",
    script      : "./server.js",
    watch       : true,
    ignore_watch: "node_modules",
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
      "NODE_ENV": "production"
    }
  }]
}
