
const { By, Key, until } = require('selenium-webdriver');

const sleep = (ms = 5000) => new Promise(resolve => setTimeout(resolve, ms));

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async open(url) {
        await this.driver.get(url);
        await sleep();
    }

    async click(locator) {
        const element = await this.driver.wait(
            until.elementLocated(locator), 10000
        );

        await this.driver.wait(
            until.elementIsVisible(element), 10000
        );

        await element.click();
        await sleep();
    }

    async setValue(locator, value) {
        const element = await this.driver.findElement(locator);

        await element.clear();
        await element.sendKeys(value);

        await sleep();
    }

    async clearValue(locator) {
        const element = await this.driver.findElement(locator);

        await element.click();
        await element.sendKeys(Key.CONTROL, 'a');
        await element.sendKeys(Key.BACK_SPACE);

        await sleep();
    }

    async getText(locator) {
        const element = await this.driver.findElement(locator);
        return await element.getText();
    }

    async getValue(locator) {
        const element = await this.driver.findElement(locator);
        return await element.getAttribute('value');
    }

    async scrollIntoElement(locator) {
        const element = await this.driver.findElement(locator);

        await this.driver.executeScript(
            "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
            element
        );

        await sleep();
    }

    async waitForElement(locator, timeout = 10000) {
        return await this.driver.wait(
            until.elementLocated(locator),
            timeout
        );
    }

    async isDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isEnabled(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isEnabled();
    }

    async scrollIntoElement(locator) {
    const element = await this.driver.wait(
        until.elementLocated(locator), 10000
    );

    await this.driver.wait(
        until.elementIsVisible(element), 10000
    );

    await this.driver.executeScript(
        "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
        element
    );

    await sleep();
}
}

module.exports = BasePage;
