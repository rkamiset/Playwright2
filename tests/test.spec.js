const {test, expect} = require('@playwright/test');

test('Manual typed test', async({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[name="user-name"]').fill("standard_user");
    await page.locator("#password").fill('secret_sauce');
    await page.locator('#login-button').click();

    //Verify the resultant page logo
    const logo = await page.locator(".app_logo").allTextContents();
    console.log('Hello World! ', logo);
    const products = page.getByText("Products");
    console.log('Hola: ', products);

    expect("Products").toBeTruthy;
    expect('Anything').toBeTruthy;
    

});

