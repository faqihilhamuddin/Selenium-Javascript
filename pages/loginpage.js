
const { By, until } = require('selenium-webdriver');
const BasePage = require('./page');


class LoginPage extends BasePage {
    constructor(driver) {
        super(driver);

        this.usernameField = By.id('user-name');
        this.passwordField = By.id('password');
        this.loginButton = By.id('login-button');
        this.errorMessage = By.css('[data-test="error"]');
    }

    async open() {
        await super.open('https://www.saucedemo.com/');
    }

    async writeUsername(username) {
        await super.setValue(this.usernameField, username);
    }

    async login(username, password) {
        await super.setValue(this.usernameField, username);
        await super.setValue(this.passwordField, password);
        await super.click(this.loginButton);
    }

    async getErrorMessage() {
        const element = await this.waitForElement(this.errorMessage, 5000);
        return await element.getText();
    }

    async clearUsername() {
        await super.clearValue(this.usernameField);
    }
}

module.exports = LoginPage;
