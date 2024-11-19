const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page) 
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        
    }

    async login(username, password) {
        await this.usernameField.fill(username);

        await this.passwordField.fill(password);

        await this.loginButton.click();

    }
}

module.exports = LoginPage;