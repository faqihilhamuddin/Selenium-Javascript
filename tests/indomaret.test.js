const { createDriver } = require('../utils/utils');
const Indomart = require('../pages/automationIndomaret');

describe('KlikIndomaret - Makanan dan Madu', function () {

    let driver;
    let indomart;

    this.timeout(120000);

    before(async function () {
        driver = await createDriver();
        indomart = new Indomart(driver);
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it('User dapat menambahkan produk Madu ke keranjang', async function () {

        await indomart.open();
        await indomart.clickKategori();
        await indomart.clickMakanan();
        await indomart.clickMadu();
        await indomart.clickCard();
        await indomart.clickTambahKeranjang();

    });

});