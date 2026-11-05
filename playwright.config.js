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
      /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium', //chromium, safari, toolkit
    headless : true,
    screenshot : 'on',
    trace: 'retain-on-failure',  // captures trace with DOM snapshots for every action or 'retain-on-failure' / 'on-first-retry' to keep files small
  },
});
