
const { expect } = require('chai');
const { By, until } = require('selenium-webdriver');

const { createDriver } = require('../utils/driver');
const LoginPage = require('../pages/loginpage');

describe('SauceDemo - Login Test', function () {

    this.timeout(30000);

    let driver;
    let loginPage;

    before(async function () {
        driver = await createDriver();
        loginPage = new LoginPage(driver);
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it('TC001 - Login with valid credentials', async function () {
        await loginPage.open();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await driver.wait(
            until.urlContains('inventory.html'),
            10000
        );

        const currentUrl = await driver.getCurrentUrl();

        expect(currentUrl).to.include('inventory.html');
    });

});
