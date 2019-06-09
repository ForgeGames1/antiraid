const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  message.channel.sendMessage("a");
});

client.login('NTg2OTc3MzE0NTkyNTIyMjQx.XPxUfw.aXIZXrVnf-BTMqcfEXsvuCdGOdg');
