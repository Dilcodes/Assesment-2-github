import { expect } from 'chai';

describe('Test Login with Incorrect Credentials', () => {
    it('should show an error message for invalid credentials', async () => {
        // Navigate to the site
        await browser.url('https://onlinelibrary.wiley.com/');

        // Click on the "Sign In" link
        const signInLink = await $('a=Sign In');
        await signInLink.click();

        // Enter valid email but incorrect password
        const emailInput = await $('#email');
        await emailInput.setValue('testuser@example.com');

        const passwordInput = await $('#password');
        await passwordInput.setValue('wrongpassword');

        const signInButton = await $('#signInButton');
        await signInButton.click();

        // Verify error message
        const errorMessage = await $('.error-message'); // Adjust selector as necessary
        const errorText = await errorMessage.getText();
        expect(errorText).to.include('Invalid credentials');
    });
});
