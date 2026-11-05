//The following script is automagically created, upon the original submitted script reviewed by RS Academy. Love the AI behind :)

const { test, expect } = require('@playwright/test');
const common = require('../helpers/common');
//import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  //await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('rajendra.kamisetty@gmail.com');
  //await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Chetha_11r');
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test('test', async ({ page }) => {
  //Add Event
  //await page.goto('https://eventhub.rahulshettyacademy.com/login');
  // await page.getByRole('textbox', { name: 'Email' }).click();
  // await page.getByRole('textbox', { name: 'Email' }).fill('rajendra.kamisetty@gmail.com');
  // await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  // await page.getByRole('textbox', { name: 'Password' }).fill('Chetha_11r');
  // await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Discover & BookAmazing EventsFrom tech conferences to live concerts, sports').click();
  await page.getByRole('button', { name: 'Admin' }).click();
  await page.getByText('From tech conferences to live').click();
  await page.getByRole('button', { name: 'Admin' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Manage Events' }).click();
  await page.getByTestId('event-title-input').click();
  await page.getByTestId('event-title-input').fill('PLaywright Meetup');
  await page.getByTestId('event-title-input').press('Tab');
  await page.getByRole('textbox', { name: 'Describe the event…' }).fill('Hooked with annotations');
  await page.getByLabel('Category*').selectOption('Workshop');
  await page.getByRole('textbox', { name: 'City*' }).click();
  await page.getByRole('textbox', { name: 'City*' }).fill('Alpharetta, GA');
  await page.getByRole('textbox', { name: 'Venue*' }).click();
  await page.getByRole('textbox', { name: 'Venue*' }).fill('Apex Center');
  await page.getByRole('textbox', { name: 'Venue*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2026-08-16T10:00');
  //await page.getByText('Title*DescriptionAnother').click();
  await page.getByRole('spinbutton', { name: 'Price ($)*' }).click();
  await page.getByRole('spinbutton', { name: 'Price ($)*' }).fill('100.00');
  await page.getByRole('spinbutton', { name: 'Price ($)*' }).press('Tab');
  await page.getByRole('spinbutton', { name: 'Total Seats*' }).fill('100');
  await page.getByRole('textbox', { name: 'Image URL (optional)' }).click();
  //await page.getByRole('textbox', { name: 'Image URL (optional)' }).fill('https://ix-marketing.imgix.net/2024-06_blog_the-power-of-images_image-4_drive-engagement.jpg');
  await page.getByRole('textbox', { name: 'Image URL (optional)' }).fill(common.randomImage);
  
  //Add Booking, based on the event, just created.
  //Capture eventID from network response: Capture the post response to retrieve the event ID
  const eventCreation = page.waitForResponse(
    res => res.url().includes('/api/events') && res.request().method() === 'POST',
    { timeout: 60000 }
  );

  // Perform the UI action that creates the event
  await page.getByTestId('add-event-btn').click();

  // Await the response right away so we don't miss it before navigation changes the page state
  let eventId;
  try {
    const response = await eventCreation;
    const body = await response.json().catch(() => null);
    eventId = body?.id
      ?? body?.eventId
      ?? body?.data?.id
      ?? body?.data?.eventId
      ?? body?.event?.id
      ?? body?.event?.eventId
      ?? body?.result?.id
      ?? body?.result?.eventId;

    console.log('Create-event response URL:', response.url());
    console.log('Create-event response body:', JSON.stringify(body));
  } catch (error) {
    console.log('Create-event response was not captured:', error.message);
  }

  await page.getByTestId('admin-event-form').locator('div').filter({ hasText: '+ Add Event' }).click();
  await page.getByTestId('nav-events').click();
  await page.goto('https://eventhub.rahulshettyacademy.com/events');

  if (!eventId) {
    const eventLink = page.locator('a[href*="/events/"]').filter({ hasText: 'PLaywright Meetup' }).first();
    if (await eventLink.count()) {
      const href = await eventLink.getAttribute('href');
      eventId = href?.split('/').filter(Boolean).pop();
    }
  }

  console.log('New event ID:', eventId);

  if (!eventId) {
    throw new Error('Unable to retrieve the created event ID from the create-event response or the UI.');
  }

  // Use it immediately (example: navigate to event details)
  await page.goto(`https://eventhub.rahulshettyacademy.com/events/${eventId}`);

  await page.getByRole('textbox', { name: 'Full Name*' }).click();
  await page.getByRole('textbox', { name: 'Full Name*' }).fill('F5 Now');
  await page.getByTestId('customer-email').fill('f1please@yahoo.co.in');
  await page.getByTestId('customer-email').press('Tab');
  await page.getByRole('textbox', { name: 'Phone Number*' }).fill('13127250498');
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Confirm Booking' }).click();
  await page.getByRole('heading', { name: /Booking Confirmed/i }).click();
  await page.getByRole('button', { name: 'View My Bookings' }).click();
  await page.getByTestId('booking-card').first().click();
  await page.getByRole('button', { name: 'View Details' }).first().click();
  //await page.getByText('My Bookings/M-BLZRZUM-').click();
  await page.getByRole('button', { name: '← Back to My Bookings' }).click();
  //await page.getByRole('heading', { name: 'Messi Retro Event' }).first().click();
});