const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'a7bq2k',
  viewportWidth: 1024,
  viewportHeight: 2048,
  e2e: {
    setupNodeEvents(on, config) {

    },
  },
});
