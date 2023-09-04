
const handler = async () => {
  const puppeteer = require("puppeteer");
  const url = "https://www.google.com";
  let title = "No title found";
  let browser;
  try {
    browser = await puppeteer.launch({args: [], headless: "new"});
    console.log("Browser opened");
    const page = await browser.newPage();
    console.log("Page created");
    await page.goto(url);
    console.log(`Navigated to url`);
    title = await page.title();
    console.log(`Retrieved title: ${title}`);
  } finally {
    console.log("Closing browser");
    if (browser) await browser.close();
  }

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Puppeteer navigated to ${url} and outputted the title: ${title}.`),
  };
  return response;
};

module.exports = { handler };
