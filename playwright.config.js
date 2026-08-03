// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :0,
  
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  
  // reporter: 'html', Using below to use a unique folder per run, such as a timestamped directory
    reporter: [['html', { outputFolder: `./playwright-report-${Date.now()}`, open: 'never' }]], 
  
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium', //chromium, safari, toolkit
    headless : false,
    screenshot : 'on',
    trace : 'on',//off,on,retain-on-failure' 
  },


};

module.exports = config;
