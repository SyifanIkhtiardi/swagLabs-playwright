class BasePage {
    // Create new constructor that called when a new instance of BasePage (or child elemnt) is created
    constructor(page) {
        this.page = page; // Playwright's Page object passed during class instantiation
    }

    // method to navigate to a specific URL
    async navigateTo(url) {
        await this.page.goto(url);
    }

    // Method to wait for an element to be visible or present in the DOM
    async waitForElement(locator) {
        await this.page.locator(locator).waitFor();
    }

    // Method to retrieve current page title
    async getTitle() {
        return await this.page.title();
    }
}

module.exports = BasePage;