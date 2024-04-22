const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId:'musds4',
  
  e2e: {
    setupNodeEvents(on, _config) {
      
     //  implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
  },
});
