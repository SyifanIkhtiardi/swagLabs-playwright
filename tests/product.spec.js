const { test, expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/InventoryPage');

test('should be redirected to detail product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const productTitle = 'Sauce Labs Backpack';

    await loginPage.navigateTo('/');

    await loginPage.login('standard_user', 'secret_sauce');

    await productPage.clickProductTItle(productTitle);

    await expect(page.locator(`text=${productTitle}`)).toBeVisible();

})