const { ActivityType } = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    client.user.setActivity("v!help", {type: ActivityType.Playing});
    console.log("El cliente ya esta listo");
    loadCommands(client);
  },
}