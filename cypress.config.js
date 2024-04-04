const {defineConfig} = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-localstorage-commands/plugin')(on, config);
      // implement node event listeners here
    },
    defaultCommandTimeout: 20000,
    watchForFileChanges: false,
    baseUrl: 'https://magento.softwaretestingboard.com/',
    viewportHeight: 768,
    viewportWidth: 1366,
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
});
