//import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

test('test11', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('link', { name: 'Gmail' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sign into Gmail' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('textbox', { name: 'Email or phone' }).click();
  await page1.getByRole('textbox', { name: 'Email or phone' }).fill('rajendra.kamisetty@gmail.com');
  await page1.getByRole('textbox', { name: 'Email or phone' }).press('Enter');
  await page1.getByRole('link', { name: 'Try again' }).click();
});