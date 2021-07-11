const { CommandoClient } = require("discord.js-commando");
const path = require("path");

const client = new CommandoClient({
  commandPrefix: "?",
  owner: "775137945430392842"
});

client.on("message", message => {
  if (message.content === "test") {
    message.channel.send("test");
  }
});

client.login(process.env.TOKEN);
