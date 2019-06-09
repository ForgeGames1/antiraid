const Discord = require('discord.js');
const client = new Discord.Client();
const AntiRaid = "false";

client.on('message', message => {
  message.channel.sendMessage("a");
  if(message.content.startWith("..antiraid")){
      message.channel.sendMessage("AntiRaid " + AntiRaid);
      message.channel.sendMessage("t");
      AntiRaid = AntiRaid : "false" ? "true";
  }
});

client.login('NTg3MDcwOTI2MjQ0NDEzNDQw.XPxOaw.ssAjKKa5-cNZyoTA63FS3rPSbMc');
