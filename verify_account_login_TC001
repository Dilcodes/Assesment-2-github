import { expect } from 'chai';

describe('Verify Account Login', () => {
    it('should log in with valid credentials', async () => {
        // Navigate to the site
        await browser.url('https://onlinelibrary.wiley.com/');

        // Click on the "Sign In" link
        const signInLink = await $('a=Sign In');
        await signInLink.click();

        // Enter valid credentials
        const emailInput = await $('#email');
        await emailInput.setValue('testuser@example.com');

        const passwordInput = await $('#password');
        await passwordInput.setValue('Test@123');

        const signInButton = await $('#signInButton');
        await signInButton.click();

        // Verify successful login
        const dashboardText = await $('h1=Dashboard'); // Adjust selector based on the site
        const isDisplayed = await dashboardText.isDisplayed();
        expect(isDisplayed).to.be.true;
    });
});
