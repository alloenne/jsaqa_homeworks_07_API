const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wbysop",
  e2e: {

    baseUrl: "https://petstore.swagger.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
