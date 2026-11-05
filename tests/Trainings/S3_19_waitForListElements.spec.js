const { test, expect } = require('@playwright/test');
 
test('Wait for List of Elements', async ({ page }) => {
   //js file- Login js, DashboardPage
   const username = "rahulshettyacademy";
   const pwd = "Learning@830$3mK2";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   await page.locator("#username").fill(username);
   await page.locator("#password").type(pwd);
   await page.locator("[value='Sign In']").click();
   await page.waitForLoadState('networkidle'); //waits until the network becomes idle, meaning all the (micro) service clals are rendered
   console.log(await page.title());
   await page.locator(".card-body a").first().waitFor(); //Navigate by class, then by child tag for unique element
   //await page.locator(".card-body a").last().waitFor();
   const firstElement = await page.locator(".card-body a").first().textContent();
   const titles = await page.locator(".card-body a").allTextContents(); 
   const lastElement = await page.locator(".card-body a").last().textContent();
   console.log(firstElement);
   console.log(titles); 
   console.log(lastElement);
   
 
})
