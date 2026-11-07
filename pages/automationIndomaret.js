const { By, until } = require('selenium-webdriver');
const BasePage = require('./page');
const sleep = (ms = 5000) => new Promise(resolve => setTimeout(resolve, ms));


class indomart extends BasePage {
    constructor(driver) {
        super(driver);

        this.closeModal = By.css("[color='#151823']");
        this.kategori = By.css(".-top-2 > .flex");
        this.makanan = By.css("button:nth-of-type(3)");
        this.madu = By.css("[href='/xpress/category/makanan/sarapan-selai/madu'] .menu-list");
        this.card = By.css(".mb-6 > div:nth-of-type(1) > #default-card");
        this.tambahKeranjang = By.css(".flex.bg-primary");

    }

    async open() {
        await super.open('https://www.klikindomaret.com/');
        await sleep(10000);
    }

    async closePopUp(){
        await super.waitForElement(this.closeModal);
        await super.click(this.closeModal);
    }

    async clickKategori() {
        await super.waitForElement(this.kategori);
        await super.click(this.kategori);
    }

    async clickMakanan() {
        await super.scrollIntoElement(this.makanan);
        await super.click(this.makanan);
    }

    async clickMadu() {
        await super.scrollIntoElement(this.madu);
        await super.click(this.madu);
    }

    async clickCard() {
        await super.click(this.card);
    }

    async clickTambahKeranjang() {   
        await sleep(5000);  
        await super.click(this.tambahKeranjang);
    }

}
module.exports = indomart;