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

  const reply = (msg, files) => {
    message.reply({
      content: msg,
      files: files,
    });
  };

  if (
    message.content.toLowerCase().includes("burgir") &&
    message.author.id !== "887831874884468737"
  )
    message.reply("<:burgir:892746551720562728>");

  if (
    message.content.toLowerCase().includes("linux") &&
    !message.content.toLowerCase().includes("gnu/linux") &&
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
      LutBuffet().then(reply);
      break;
    case "!buffet":
      LutBuffet().then(reply);
      break;

    case "!indianacurry":
      await IndianaCurry();
      reply(
        "**Indiana Curry – " + "toivottavasti kuva tästä päivästä" + "**\n",
        ["ic.png"]
      );
      break;
    case "!ic":
      await IndianaCurry();
      reply(
        "**Indiana Curry – " + "toivottavasti kuva tästä päivästä" + "**\n",
        ["ic.png"]
      );
      break;

    case "!kys":
      message.reply("🔫🤓🧨");
      break;
  }
});

client.login(process.env.BOT_TOKEN);
