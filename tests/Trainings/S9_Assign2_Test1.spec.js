//import { test, expect } from '@playwright/test';
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

test('Check Refund Eligibility - Positive Case', async ({ page }) => {
  await page.getByRole('link', { name: 'Browse Events →' }).click();
  await page.getByRole('img', { name: 'Missing Messi' }).click();
  await page.locator('article:nth-child(7) > .p-4 > .flex.items-center > #book-now-btn').click();
//   await page.getByRole('textbox', { name: 'Full Name*' }).click();
  await page.getByRole('textbox', { name: 'Full Name*' }).fill('Single Booking');
//   await page.getByRole('textbox', { name: 'Full Name*' }).press('Tab');
  await page.getByTestId('customer-email').fill('f1please@yahoo.co.in');
  await page.getByTestId('customer-email').press('Tab');
  await page.getByRole('textbox', { name: 'Phone Number*' }).fill('13127250498');
//   await page.getByRole('textbox', { name: 'Phone Number*' }).press('Tab');
  await page.getByRole('button', { name: 'Confirm Booking' }).click();
  await page.getByText('Your tickets are reserved.').click();
  await page.getByRole('heading', { name: 'Booking Confirmed! 🎉' }).click();
  await page.getByRole('button', { name: 'View My Bookings' }).click();
  await page.getByRole('button', { name: 'View Details' }).first().click();
  await page.getByTestId('check-refund-btn').click();
  await page.getByText('Checking your refund').click();

  //verify Eligible for refund. Single-ticket bookings qualify for a full refund.
  //await page.getByText('Eligible for refund. Single-ticket bookings qualify for a full refund.').click();
  await page.locator('text=Eligible for refund.').waitFor();
  //await page.locator("div #refund-result").hasText('Not eligible for refund.');
  await expect(page.getByText('Eligible for refund.')).toBeVisible();
  await page.getByRole('button', { name: '← Back to My Bookings' }).click();
});