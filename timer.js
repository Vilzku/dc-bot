exports.setTimer = async (client, message, hours) => {
  const channel = client.channels.cache.get("689462403658022932");

  const time_in_ms = hours * 3600000;
  channel.send("Timer set for " + hours + " hours!");
  setTimeout(function () {
    message.reply("Herää vitun muhlu");
  }, ms);
};
