const puppeteer = require('puppeteer');

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
        await page.waitForNavigation({ waitUntil: 'networkidle0'});
     
        console.log('Login Success!');
        let i;
        for(i = 1; i <= 5; i++){
            await page.click('#root > div > div.sc-dlfnbm.bcaJjD > div.sc-jSgupP.ckDfJz');
            console.log('Morning Check!');
    
            await page.on("dialog", (dialog) => {
                console.log("dialog");
                dialog.accept();
            })
            console.log(`Reloading... : ${i}`);
        }
        
    } catch(error) {
        console.log(error);
    }
}

begin();