const axios = require("axios");
const { JSDOM } = require("jsdom");

const url = "https://fi.jamix.cloud/apps/menu/?anro=97383&k=1&mt=4";

const LutBuffet = async () => {
  const res = await axios.get(url);

  const dom = new JSDOM(res.data);

  console.log(dom.window.document.body.innerHTML);

  let msg = "**Lut Buffet – " + "ei ikinä" + "**\n";

  // for (let i = 0; i < titles.length; i++) {
  //   msg += titles.item(i);
  //   msg += "";
  // }

  return msg;
};

exports.LutBuffet = LutBuffet;
