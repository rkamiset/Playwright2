const { test, expect } = require('@playwright/test');

test('Basic API Test', async ({ request }) => {
    const loginPageUrl = 'https://eventhub.rahulshettyacademy.com/login';
    const loginApiUrl = 'https://api.eventhub.rahulshettyacademy.com/api/auth/login';
    const loginPayload = {
        email: 'rahulshetty1@gmail.com',
        password: 'Magiclife1!'
    };
    const headerPayload = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

    console.log('loginPageUrl:', loginPageUrl);
    console.log('loginApiUrl:', loginApiUrl);

    const apiResponse = await request.post(loginApiUrl, {
        data: JSON.stringify(loginPayload),
        headers: headerPayload
    });

    console.log('apiResponse status:', apiResponse.status());

    const apiResponseJson = await apiResponse.json();
    console.log('apiResponseJson:', apiResponseJson);

    if (!apiResponse.ok()) {
        throw new Error(`Login failed with status ${apiResponse.status()}: ${JSON.stringify(apiResponseJson)}`);
    }

    expect(apiResponseJson).toHaveProperty('token');

    const userDetails = apiResponseJson.user;
    console.log('userDetails:', userDetails);
    
    const token = apiResponseJson.token;
    console.log('token:', token);
});