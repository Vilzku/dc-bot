const Discord = require("discord.js");
const { Yolo, Laseri, LutBuffet, IndianaCurry } = require("./restaurants");
const { gnu } = require("./gnu");

require("dotenv").config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("!kys");
});

client.on("messageCreate", async (message) => {
  const command = message.content;

  const reply = (msg) => {
    message.reply(msg);
  };

  if (
    message.content.toLowerCase().includes("linux") &&
    message.author.id !== "887831874884468737"
  ) {
    message.reply(gnu);
  }
  if (command[0] === "!")
    console.log(command + " by " + message.author.username);

  switch (command) {
    case "!yolo":
      Yolo().then(reply);
      break;

    case "!laseri":
      Laseri().then(reply);
      break;

    case "!lutbuffet":
      message.reply("not supported... yet");
      break;
    case "!buffet":
      message.reply("not supported... yet");
      break;

    case "!indianacurry":
      message.reply("not supported... yet");
      break;
    case "!ic":
      message.reply("not supported... yet");
      break;

    case "!kys":
      message.reply("🔫🤓🧨");
  }
});

client.login(process.env.BOT_TOKEN);
