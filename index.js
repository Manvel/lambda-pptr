
const handler = async () => {
  console.log("Starting handler");
  const puppeteer = require("puppeteer");
  const url = "https://www.google.com";
  let title = "No title found";
  let browser;
  try {
    console.log("Opening browser");
    browser = await puppeteer.launch({args: ["--no-sandbox", "--disable-setuid-sandbox", "--no-zygote"], headless: "new", executablePath: "/usr/bin/google-chrome"});
    console.log("Browser opened");
    const page = await browser.newPage();
    console.log("Page created");
    await page.goto(url);
    console.log(`Navigated to url`);
    title = await page.title();
    console.log(`Retrieved title: ${title}`);
  } catch(e) {
    console.error("Error occurred", e);
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
