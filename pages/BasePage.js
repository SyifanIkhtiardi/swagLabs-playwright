class BasePage {
    // Create new constructor that called when a new instance of BasePage (or child elemnt) is created
    constructor(page) {
        this.page = page; // Playwright's Page object passed during class instantiation
    }

    // method to navigate to a specific URL
    async navigateTo(url) {
        await this.page.goto(url);
    }

    // Method to wait for an element to be visible or present in the DOM using data-test attribute
    async waitForElement(dataTestValue) {
        await this.page.locator(`[data-test='${dataTestValue}']`).waitFor();
    }

    // Method to locate element using data test attribute
    getElementByDataTest(dataTestValue){
        return this.page.locator(`[data-test='${dataTestValue}']`);
    }

    // Method to locate element using data test attribute and name (dynamic locator)
    getElementByDataTestAndName(dataTestValue, name){
        return this.page.locator(`[data-test="${dataTestValue}"]:text("${name}")`);
    }

    // Wit for element using it's data test value
    async waitForElementByDataTest(dataTestValue) {
        await this.page.locator(`[data-test='${dataTestValue}']`).waitFor();
    }

    // Wait for element using both data-test and name
    async waitForElementByDataTestAndName(dataTestValue, name) {
        await this.page.locator(`[data-test='${dataTestValue}'][name='${name}']`).waitFor();
    }

    // Method to retrieve current page title
    async getTitle() {
        return await this.page.title();
    }
}

module.exports = BasePage;