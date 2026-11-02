const { By, until } = require('selenium-webdriver');
const BasePage = require('./page');


class indomart extends BasePage {
    constructor(driver) {
        super(driver);

        this.closeModal = By.css("button[aria-label='Close']");
        this.kategori = By.xpath("//span[text()='Kategori']");
        this.makanan = By.xpath("//button//span[normalize-space()='Makanan']");
        this.madu = By.xpath("//div[contains(@class,'menu-list') and normalize-space()='Madu']");
        this.card = By.css(".card-product:nth-of-type(1)");
        this.tambahKeranjang = By.css("button.bg-primary");

    }

    async open() {
        await super.open('https://www.klikindomaret.com/');
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
        await super.click(this.tambahKeranjang);
    }

}
module.exports = indomart;