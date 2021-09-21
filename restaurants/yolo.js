const axios = require("axios");
const { JSDOM } = require("jsdom");

const url = "https://aalef.fi/ylioppilastalo";

const Yolo = async () => {
  const res = await axios.get(url);

  const dom = new JSDOM(res.data);
  const menuElement = dom.window.document.getElementById(
    "dnn_ctr3617_ModuleContent"
  );

  const menuItems = menuElement.children;

  let msg = "**YOLO – " + menuItems.item(0).innerHTML + "**\n";

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems.item(i).innerHTML.length === 0) continue;
    if (menuItems.item(i).classList.contains("lunchtype"))
      msg += menuItems.item(i).innerHTML;
    else if (menuItems.item(i).classList.contains("lunchtitle"))
      msg += " – " + menuItems.item(i).innerHTML + "\n";
  }

  return msg;
};

exports.Yolo = Yolo;
