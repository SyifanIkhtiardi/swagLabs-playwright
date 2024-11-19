// @ts-check
const { test, expect } = require('@playwright/test');
const LoginPage = require('./LoginPage');
const { log } = require('console');

test('should login successfully', 
  async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo('https://www.saucedemo.com/');

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page.locator('text=Products')).toBeVisible();
  }
)

/*
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
})

test.describe('User login flow', () => {
  test('Valid user credentials redirect to dashboard', async ({page}) => {
    await page.fill('input[name="user-name"]', 'standard_user');
    await page.fill('input[name="password"]', 'secret_sauce');
    await page.getByText('Login').click();

    // Asserting redirection and welcome message
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();

  })
}) */
