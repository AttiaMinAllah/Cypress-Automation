const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: "https://cleverportal.test.clevershuttle.tech/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    hideXHRInCommandLog: true
  },
});