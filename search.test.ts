import { expect } from 'chai';

describe('Validate Search Functionality', () => {
    it('should display relevant results for valid keywords', async () => {
        // Navigate to the site
        await browser.url('https://onlinelibrary.wiley.com/');

        // Enter search term
        const searchInput = await $('#searchField');
        await searchInput.setValue('biology');

        // Submit search
        const searchButton = await $('button=Search'); // Adjust button selector as necessary
        await searchButton.click();

        // Verify search results
        const searchResults = await $$('.search-result-title'); // Adjust class name based on the site
        expect(searchResults.length).to.be.greaterThan(0);
    });
});
