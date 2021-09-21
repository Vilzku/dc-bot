const puppeteer = require("puppeteer");

const url =
  "https://apps.wixrestaurants.com/?type=wixmenus.client&lang=fi&dateNumberFormat=fi-fi&isPrimaryLanguage=true&pageId=x01zj&compId=TPASection_ijxztlum&viewerCompId=TPASection_ijxztlum&siteRevision=123&viewMode=site&deviceType=desktop&locale=fi&tz=Europe%2FHelsinki&regionalLanguage=fi&width=995&height=1211&instance=89v3yOqT8pXnbDbY-JWL0ENDEutPN4Nc5TVxnpiTLpM.eyJpbnN0YW5jZUlkIjoiY2U2YTMyZjYtM2Q1OS00MWUwLTlhMmEtYmQ0N2Q5MzhlMmI0IiwiYXBwRGVmSWQiOiIxM2MxNDAyYy0yN2YyLWQ0YWItNzQ2My1lZTdjODllMDc1NzgiLCJtZXRhU2l0ZUlkIjoiZWJhNjlhOTAtMzk2OC00NzYzLThkYWYtOWY1YTVjNTNlMDVlIiwic2lnbkRhdGUiOiIyMDIxLTA5LTIxVDIxOjM5OjQxLjcwNloiLCJ2ZW5kb3JQcm9kdWN0SWQiOiJyZXN0X3BybyIsImRlbW9Nb2RlIjpmYWxzZSwib3JpZ2luSW5zdGFuY2VJZCI6IjE4YTY0MDE1LTRkYmQtNDI4MC05MjlmLTYzZmY2YmZkNTc3YSIsImFpZCI6ImMxZmY2N2E2LWYwZjEtNDYxZC05N2U0LTZhN2MwODA0YmFiYSIsImJpVG9rZW4iOiIyNWNjYTg2Ni0wNDMxLTA2ODMtMTc4NS0yMjFkODU2YjAyZWEiLCJzaXRlT3duZXJJZCI6IjM4N2RmZGU0LTM3ZTktNDExMS1iYTFhLWE5Yzc2ZGU2YTQ2OSJ9&currency=EUR&currentCurrency=EUR&commonConfig=%7B%22brand%22%3A%22wix%22%2C%22bsi%22%3A%22351def0d-1b8a-44ac-98b4-b9eca5ce30a0%7C1%22%2C%22BSI%22%3A%22351def0d-1b8a-44ac-98b4-b9eca5ce30a0%7C1%22%7D&target=_top&section-url=https%3A%2F%2Fwww.indianacurry.com%2Fmenus%2F&vsi=2e8e8e47-79b9-48fe-ac1e-cea8ee0ef896";

const coords = [
  { x: 40, y: 350 },
  { x: 450, y: 350 },
  { x: 40, y: 550 },
  { x: 450, y: 550 },
  { x: 250, y: 750 },
];

const IndianaCurry = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.click("a[id=menu862fe208-014f-493d-98c9-2a16e743de22]");

  const date = new Date();
  const n = date.getUTCDay();

  if (n > 4)
    await page.screenshot({
      path: "ic.png",
      fullPage: true,
    });
  else
    await page.screenshot({
      path: "ic.png",
      clip: {
        x: coords[n].x,
        y: coords[n].y,
        width: 300,
        height: 165,
      },
    });
};

exports.IndianaCurry = IndianaCurry;
