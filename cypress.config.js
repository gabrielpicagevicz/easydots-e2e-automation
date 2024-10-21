const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://teste.easydots.com.br",
    // não vai limpar o estado da tela a cada it
    testIsolation: false,
  },
});
