const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page) 
        this.usernameField = this.getElementByDataTest('username');
        this.passwordField = this.getElementByDataTest('password');
        this.loginButton = this.getElementByDataTest('login-button');
        this.invalidLoginError = this.getElementByDataTest('error');
    }

    // Method to perform login
    async login(username, password) {
        await this.usernameField.fill(username);

        await this.passwordField.fill(password);

        await this.loginButton.click();

    }

    // Get the error message
    async getErrorMessage() {
        return await
        this.invalidLoginError.textContent();
    }
}

module.exports = LoginPage;