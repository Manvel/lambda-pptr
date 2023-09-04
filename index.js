const {globSync} = require("glob");

const handler = async () => {
  const puppeteer = require("puppeteer-core");
  const url = "https://www.google.com";
  let title = "No title found";
  let browser;
  try {
    const [pathLinux] = globSync("chrome/**/chrome");

    if (!pathLinux) {
      throw new Error("No chrome found");
    }
    console.log(`Using chrome at ${pathLinux}`);
    browser = await puppeteer.launch({args: [], headless: true, executablePath: pathLinux});
    // chrome/mac-116.0.5845.96/chrome-mac-x64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing
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
