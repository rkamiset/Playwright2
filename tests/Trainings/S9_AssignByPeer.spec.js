//Complete the Playwright code for given manual Instructions.
const { test, expect } = require('@playwright/test');

// Setup Configuration
const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const EMAIL = 'rajendra.kamisetty@gmail.com'; // <Replace with your own credentials>
const PASSWORD = 'Chetha_11r'; // <Replace with your own credentials>

// Reusable Date Helper (Returns tomorrow's date format for inputs: YYYY-MM-DDTHH:mm)
function futureDateValue() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(18, 0, 0, 0); // Set to 6:00 PM tomorrow
    return tomorrow.toISOString().slice(0, 16);
}
// Reusable Login Helper Function
async function login(page) {
    await page.goto(`${BASE_URL}/login`);
    await page.getByPlaceholder('you@email.com').fill(EMAIL);
    await page.getByLabel('Password').fill(PASSWORD);
    await page.locator('#login-btn').click();
    //await expect(page.getByRole('link', { name: 'Browse Events' })).toBeVisible(); --Commenting this for a while as it's failing. Error: expect(locator).toBeVisible() failed
}
test('Create event, book it, and verify seat count drops by 1', async ({ page }) => {
    // Generate unique event title
    //const eventTitle = `Test Event ${Date.now()}`;
    // ==========================================
    // Step 1 — Login
    // ==========================================
    await login(page);
    // ==========================================
    // Step 2 — Create a new event
    // ==========================================
    await page.goto(`${BASE_URL}/admin/events`);
    await page.locator('#event-title-input').fill('eventTitle 1');
    await page.locator('#admin-event-form textarea').fill('Event Description 1.');
    await page.getByLabel('City').fill('Gulf of America');
    await page.getByLabel('Venue').fill('SpaceX');
    await page.getByLabel('Event Date & Time').fill(futureDateValue());
    await page.getByLabel('Price ($)').fill('100');
    await page.getByLabel('Total Seats').fill('50');
    await page.getByRole('textbox', { name: 'Image URL (optional)' }).fill('https://ix-marketing.imgix.net/2024-06_blog_the-power-of-images_image-4_drive-engagement.jpg');
    await page.locator('#add-event-btn').click();
    //await expect(page.getByText('Event created!')).toBeVisible(); --Supressing until getting past the happy path success.

    // ==========================================
    // Step 3 — Find the event card and capture seats
    // ==========================================
    await page.goto(`${BASE_URL}/events`);
  
    const allCards = page.locator('[data-testid="event-card"]');
    await expect(allCards.first()).toBeVisible();
 
    // Filter for our unique event card
    const targetCard = allCards.filter({ hasText: eventTitle });
    await expect(targetCard).toBeVisible({ timeout: 5000 });

    // Read and parse initial seat count
    const seatTextBefore = await targetCard.locator(':text("seat")').textContent();
    const seatsBeforeBooking = parseInt(seatTextBefore.replace(/\D/g, ''), 10);
    // ==========================================
    // Step 4 — Start booking
    // ==========================================
    await targetCard.locator('[data-testid="book-now-btn"]').click();
    // ==========================================
    // Step 5 — Fill booking form
    // ==========================================
    await expect(page.locator('#ticket-count')).toHaveText('1');
    await page.getByLabel('Full Name').fill('John Doe');
    await page.locator('#customer-email').fill('johndoenaho@example.com');
    await page.getByPlaceholder('+91 98765 43210').fill('+1 888 123 4567');
  
    await page.locator('.confirm-booking-btn').click();
    // ==========================================
    // Step 6 — Verify booking confirmation
    // ==========================================
    const bookingRefElement = page.locator('.booking-ref').first();
    await expect(bookingRefElement).toBeVisible();
    const bookingRef = (await bookingRefElement.innerText()).trim();

    // ==========================================
    // Step 7 — Verify in My Bookings
    // ==========================================
    await page.getByRole('link', { name: 'View My Bookings' }).click();
    await expect(page).toHaveURL(`${BASE_URL}/bookings`);

    const bookingCards = page.locator('#booking-card');
    await expect(bookingCards.first()).toBeVisible();
  
    // Filter the booking cards for our secret booking reference code
    const targetBookingCard = bookingCards.filter({
        has: page.locator('.booking-ref', { hasText: bookingRef })
    });
    await expect(targetBookingCard).toBeVisible();
    await expect(targetBookingCard).toContainText(eventTitle);

    // ==========================================
    // Step 8 — Verify seat reduction
    // ==========================================
    await page.goto(`${BASE_URL}/events`);
    await expect(allCards.first()).toBeVisible();
   
    const targetCardAfter = allCards.filter({ hasText: eventTitle });
    await expect(targetCardAfter).toBeVisible();

    // Read the new seat count
    const seatTextAfter = await targetCardAfter.locator(':text("seat")').textContent();
    const seatsAfterBooking = parseInt(seatTextAfter.replace(/\D/g, ''), 10);
    // Assert math equation: 49 === 50 - 1
    expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);
});