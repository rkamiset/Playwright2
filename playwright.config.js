// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['html', {
      // outputFolder: 'test-results/playwright-report', //Configuration Error: HTML reporter output folder clashes with the tests output folder:
      outputFolder: 'test-results',
      open: 'never',
    }],
  ],
});
