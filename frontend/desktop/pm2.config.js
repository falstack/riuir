module.exports = {
  apps : [{
    name        : "desktop",
    script      : "./server/index.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
      "NODE_ENV": "production"
    }
  }
}
