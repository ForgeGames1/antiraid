const Discord = require('discord.js');
const client = new Discord.Client();
const AntiRaid = false;

client.on('message', message => {
  message.channel.sendMessage("a");
  if(message.content.startWith("..antiraid")){
      message.channel.sendMessage("AntiRaid " + !AntiRaid);
    AntiRaid = !AntiRaid;
  }
});

client.login('NTg2OTc3MzE0NTkyNTIyMjQx.XPxUfw.aXIZXrVnf-BTMqcfEXsvuCdGOdg');
