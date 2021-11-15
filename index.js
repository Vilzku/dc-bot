const Discord = require("discord.js");
const { Yolo, Laseri, LutBuffet, IndianaCurry } = require("./restaurants");
const { gnu } = require("./gnu");

require("dotenv").config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Leeviä from the ikkuna", { type: "WATCHING" });
});

client.on("messageCreate", async (message) => {
  if (message.author.id === "887831874884468737") return;
  const command = message.content;
  console.log(command);

  const reply = (msg, files) => {
    message.reply({
      content: msg,
      files: files,
    });
  };

  // Burgir emote
  if (
    (message.content.toLowerCase().includes("burgir") ||
      message.content.toLowerCase().includes("burger")) &&
    !message.content.toLowerCase().includes("<:burgir:892746551720562728>")
  )
    message.reply("<:burgir:892746551720562728>");

  // Linux copypasta
  if (
    message.content.toLowerCase().includes("linux") &&
    !message.content.toLowerCase().includes("gnu/linux")
  ) {
    message.reply(gnu);
  }

  // Database trigger
  if (
    message.content.toLowerCase().includes("database") ||
    message.content.toLowerCase().includes("tietokanta") ||
    message.content.toLowerCase().includes("sql")
  )
    message.reply("<:madshola:834478970862436392>");

  // Commands
  if (command[0] === "!")
    console.log(command + " by " + message.author.username);

  switch (command) {
    case "!yolo":
      Yolo().then(reply);
      break;

    case "!laseri":
      Laseri().then(reply);
      break;
    case "!laser":
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

    case ". Aostuii adotui":
      message.reply("Maistuu maistuu");
      break;
  }
});

client.login(process.env.BOT_TOKEN);
