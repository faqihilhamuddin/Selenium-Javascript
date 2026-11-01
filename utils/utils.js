
const { Builder } = require('selenium-webdriver');

const sleep = (ms = 5000) => new Promise(resolve => setTimeout(resolve, ms));

async function createDriver() {
    const driver = await new Builder()
        .forBrowser('chrome')
        .build();

    await sleep(5000);

    await driver.manage().window().maximize();

    await sleep(5000);

    return driver;
}

module.exports = { createDriver, sleep };
