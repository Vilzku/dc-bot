const puppeteer = require("puppeteer");
const { JSDOM } = require("jsdom");

const url = "https://fi.jamix.cloud/apps/menu/?anro=97383&k=1&mt=4";

const LutBuffet = async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium-browser",
  });
  const page = await browser.newPage();
  await page.goto(url);

  // Wait for page content to load
  await new Promise((r) => setTimeout(r, 1000));

  const bodyHandle = await page.$("body");
  const html = await page.evaluate((body) => body.innerHTML, bodyHandle);
  const dom = new JSDOM(html);
  const menuItems = dom.window.document.getElementsByClassName(
    "v-slot v-slot-multiline v-slot-icon-align-right"
  );
  await browser.close();

  let msg =
    "**Lut Buffet – " + "ehkä tämän päivän ruuat, ehkä huomisen, idk" + "**\n";

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems.item(i);

    const title = item.getElementsByClassName(
      "multiline-button-caption-text"
    )[0].innerHTML;
    const food = item.getElementsByClassName("item-name")[0].innerHTML;

    msg += title.split(" ")[0];
    msg += " – " + food + "\n";
  }

  return msg;
};

exports.LutBuffet = LutBuffet;
