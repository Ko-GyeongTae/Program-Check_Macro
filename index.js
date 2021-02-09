require("date-utils");
const puppeteer = require("puppeteer");

async function begin() {
  console.log("Check Process Start...");
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  console.log("Created browser & page");
  try {
    await page.goto("https://chang14.netlify.app/login");
    await page.type("#root > form > input[type=text]:nth-child(1)", "iovsi");
    await page.type("#root > form > input[type=text]:nth-child(2)", "고경태");
    console.log("Login..");

    await page.click("#root > form > button");
    await page.waitForNavigation({ waitUntil: "networkidle0" });

    console.log("Login Success!");

    page.click("#root > div > div.sc-dlfnbm.bcaJjD > div.sc-jSgupP.ckDfJz");
    console.log("Morning Check!");

    page.on("dialog", async (dialog) => {
      console.log(dialog);
      await dialog.accept();
    });

    console.log("Press Ok on alert...");
  } catch (error) {
    console.log(error);
  }
}

function roop() {
  setInterval(function () {
    let newDate = new Date();
    let Htime = newDate.toFormat("HH24");
    let Mtime = newDate.toFormat("MI");
    let Stime = newDate.toFormat("SS");
    console.log(`${Htime}:${Mtime}:${Stime}`);
    if (Stime === "30") {
      begin();
    }
  }, 1000);
}
roop();
