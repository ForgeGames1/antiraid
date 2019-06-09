const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if(message.content === "test123"){
    message.delete(1);
    message.channel.sendMessage("message suprimé");
  }
});

client.login('NTg3MDcwOTI2MjQ0NDEzNDQw.XPxOaw.ssAjKKa5-cNZyoTA63FS3rPSbMc');
