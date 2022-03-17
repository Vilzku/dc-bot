exports.setTimer = async (client, message, minutes) => {
  const channel = client.channels.cache.get("689462403658022932");

  const time_in_ms = minutes * 60000;
  channel.send("Timer set for " + minutes + " minutes!");
  setTimeout(function () {
    message.reply("Herää vitun muhlu");
  }, time_in_ms);
};
