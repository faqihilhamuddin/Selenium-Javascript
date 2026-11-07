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

    it('User Buka Klik Indomaret', async function () {

        await indomart.open();
        await indomart.closePopUp();

    });
    it('User Klik Kategori', async function () {

        await indomart.clickKategori();

    });
    it('User Pilih Kategori makanan madu', async function () {

        
        await indomart.clickMakanan();
        await indomart.clickMadu();

    });
    it('User dapat menambahkan produk Madu ke keranjang', async function () {

        
        await indomart.clickCard();
        await indomart.clickTambahKeranjang();

    });
    
});