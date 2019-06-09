const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  message.channel.sendMessage("a");
  if(message.content.startWith("..antiraid")){
      message.channel.sendMessage("t");
  }
});

client.login('NTg3MDcwOTI2MjQ0NDEzNDQw.XPxOaw.ssAjKKa5-cNZyoTA63FS3rPSbMc');
