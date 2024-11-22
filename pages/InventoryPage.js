const BasePage = require('./BasePage');

class InventoryPage extends BasePage {
    constructor(page) {
        super(page);
        this.getProductTitle = (name) => this.getElementByDataTestAndName('inventory-item-name', name);
    }

    // View detail product
    async clickProductTItle(name) {
        const item = this.getProductTitle(name);
        await item.click();
    }
}

module.exports = InventoryPage;