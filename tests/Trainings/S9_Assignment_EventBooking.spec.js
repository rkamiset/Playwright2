const { test, expect } = require('@playwright/test');
const { randomInt } = require('node:crypto');
//import { test, expect } from '@playwright/test';

/* 
This test is to add a web event and verify that it's created.
*/
test('test', async ({ page }) => {
  const eventTitle = 'Messing Random.' + Math.floor(Math.random() * 100);
  console.log('eventTitle: ', eventTitle);

  //login to website
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('rajendra.kamisetty@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Chetha_11r');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Admin' }).click();

  //add event
  await page.getByRole('navigation').getByRole('link', { name: 'Manage Events' }).click();
  await page.getByTestId('event-title-input').fill('Messi is retired, however!' + randomInt(100));
  await page.getByRole('textbox', { name: 'Describe the event…' }).fill('Yet Another event, to celebrate the legacy left behind.');
  await page.getByLabel('Category*').selectOption('Festival');
  await page.getByRole('textbox', { name: 'City*' }).fill('San Jose, CA');
  await page.getByRole('textbox', { name: 'Venue*' }).fill('Paypal Campus' + randomInt(200));
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2027-08-02T16:00');
  await page.getByRole('spinbutton', { name: 'Price ($)*' }).fill(Math.floor(Math.random() * 300));
  await page.getByRole('spinbutton', { name: 'Total Seats*' }).fill(Math.floor(Math.random() * 1000));
  await page.getByRole('textbox', { name: 'Image URL (optional)' }).fill('https://ix-marketing.imgix.net/2024-06_blog_the-power-of-images_image-3_boost-seo.jpg');
  await page.getByTestId('add-event-btn').click();
  await page.getByTestId('admin-event-form').locator('div').filter({ hasText: '+ Add Event' }).click();
  //verify the transient banner that says is created.

  //verify the event is created
  await page.getByTestId('nav-events').click();
  await page.getByRole('link', { name: eventTitle }).click();
  //await page.goto('https://eventhub.rahulshettyacademy.com/events/');
  // await page.getByRole('textbox', { name: 'Full Name*' }).click();
  await page.getByRole('textbox', { name: 'Full Name*' }).fill('Mid Term Elections 2026');
  await page.getByTestId('customer-email').fill('f1please@yahoo.co.in');
  // await page.getByTestId('customer-email').press('Tab');
  await page.getByRole('textbox', { name: 'Phone Number*' }).fill('13127250498');
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Confirm Booking' }).click();
  await page.getByRole('heading', { name: 'Booking Confirmed! 🎉' }).click();
  await page.getByRole('button', { name: 'View My Bookings' }).click();
  await page.getByTestId('booking-card').first().click();
  await page.getByRole('button', { name: 'View Details' }).first().click();
  //await page.getByText('My Bookings/M-BLZRZUM-').click();
  await page.getByRole('button', { name: '← Back to My Bookings' }).click();
  await page.getByRole('heading', { name: eventTitle }).first().click();
});
