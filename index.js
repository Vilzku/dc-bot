const Discord = require("discord.js");
const { Yolo, Laseri, LutBuffet, IndianaCurry } = require("./restaurants");
const { gnu } = require("./gnu");
const schedule = require("node-schedule");
const { sendInsult } = require("./insults");
const { setTimer } = require("./timer");

require("dotenv").config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Leevicam 24/7", {
    type: "STREAMING",
    url: "https://www.twitch.tv/amouranth",
  });
  const job = schedule.scheduleJob({ hour: 16, minute: 47 }, () => {
    sendInsult(client);
  });
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
    message.content.toLowerCase().includes("tietokan") ||
    message.content.toLowerCase().includes("sql")
  )
    message.reply("<:madshola:834478970862436392>");

  // Commands

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
      reply("Veikkaisin, että se on kiinni :-D");
      // await IndianaCurry();
      // reply(
      //   "**Indiana Curry – " + "toivottavasti kuva tästä päivästä" + "**\n",
      //   ["ic.png"]
      // );
      break;
    case "!ic":
      reply("Veikkaisin, että se on kiinni :-D");
      // await IndianaCurry();
      // reply(
      //   "**Indiana Curry – " + "toivottavasti kuva tästä päivästä" + "**\n",
      //   ["ic.png"]
      // );
      break;

    case "!kys":
      message.reply("🔫🤓🧨");
      break;

    case ". Aostuii adotui":
      message.reply("Maistuu maistuu");
      break;

    case "!insult":
      sendInsult(client);
      break;

    case "!timer " + /\d+/:
      const minutes = command.match(/\d+/);
      setTimer(client, message, minutes);
      break;
  }
});

client.login(process.env.BOT_TOKEN);
