// import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('rajendra.kamisetty@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Chetha_11r');
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('Check Refund Eligibility - Negative Case', async ({ page }) => {
  await page.getByTestId('nav-events').click();
  await page.getByRole('article').filter({ hasText: 'WorkshopMessi Missing 4Sun,' }).getByTestId('book-now-btn').click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('textbox', { name: 'Full Name*' }).fill('Multi Booking');
  await page.getByTestId('customer-email').click();
  await page.getByTestId('customer-email').fill('f1please@yahoo.co.in');
  await page.getByTestId('customer-email').press('Tab');
  await page.getByRole('textbox', { name: 'Phone Number*' }).fill('+13127250498');
  await page.getByRole('button', { name: 'Confirm Booking' }).click();
  await page.getByText('Your tickets are reserved.').click();
  await page.getByRole('button', { name: 'Browse More Events' }).click();
  await page.getByTestId('nav-bookings').click();
  await page.getByRole('button', { name: 'View Details' }).first().click();
  await page.getByTestId('check-refund-btn').click();
  await page.getByText('Checking your refund').click();
  await page.locator('text=Not eligible for refund.').waitFor();
  //await page.locator("div #refund-result").hasText('Not eligible for refund.');
  await expect(page.getByText('Not eligible for refund.')).toBeVisible();
  //await page.hasText('Not eligible for refund.').click(); // Group bookings (3 tickets) are non-refundable.
  await page.getByRole('button', { name: '← Back to My Bookings' }).click();
});
