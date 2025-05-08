const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (!message.author.bot) {
    module.exports.lastChannel = message.channel;
  }
});

client.login(config.token);
module.exports = client;