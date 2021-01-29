const puppeteer = require('puppeteer');

async function begin() {
    console.log("Check Process Start...");
    const browser = await puppeteer.launch({headless:false, defaultViewport:null});
    const page = await browser.newPage();
    console.log("Created browser & page");
    try{
        await page.goto('https://chang14.netlify.app/login');
        await page.type('#root > form > input[type=text]:nth-child(1)', 'iosvi');
        await page.type('#root > form > input[type=text]:nth-child(2)', '고경태');
        await page.click('#root > form > button');
        console.log("Login...");
        await page.waitForNavigation();
    } catch(error) {
        console.log(error);
    }
}

begin();