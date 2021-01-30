const puppeteer = require('puppeteer');
//const loginbutton = '#root > form > button';

async function begin() {
    console.log("Check Process Start...");
    const browser = await puppeteer.launch({headless:false, defaultViewport:null});
    const page = await browser.newPage();
    console.log("Created browser & page");
    try{
        await page.goto('https://chang14.netlify.app/login');
        await page.type('#root > form > input[type=text]:nth-child(1)', 'iovsi');
        await page.type('#root > form > input[type=text]:nth-child(2)', '고경태');
        console.log('Login..');
        
        await page.click('#root > form > button');
        await page.waitForNavigation({ waitUntil: 'networkidle0'}),
        
        //await page.goto('https://chang14.netlify.app');
     
        console.log('Login Success!');


    } catch(error) {
        console.log(error);
    }
}

begin();