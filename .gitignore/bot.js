const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if(message.content.startsWith("test"){
     message.channel.sendMessage("t");
     }
});


client.login('NTg2OTc3MzE0NTkyNTIyMjQx.XPxUfw.aXIZXrVnf-BTMqcfEXsvuCdGOdg');
