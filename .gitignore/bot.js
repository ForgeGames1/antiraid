const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  message.channel.sendMessage("test");
});

client.login('NTg3MDcwOTI2MjQ0NDEzNDQw.XPxOaw.ssAjKKa5-cNZyoTA63FS3rPSbMc');
