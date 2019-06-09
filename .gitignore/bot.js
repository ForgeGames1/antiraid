const Discord = require('discord.js');
const client = new Discord.Client();
const AntiRaid = false;

client.on('message', message => {
  if(message.content.startWith("..antiraid")){
      message.channel.sendMessage("AntiRaid " + !AntiRaid);
      AntiRaid = !AntiRaid;
  }
});

client.login('NTg3MDcwOTI2MjQ0NDEzNDQw.XPxOaw.ssAjKKa5-cNZyoTA63FS3rPSbMc');
