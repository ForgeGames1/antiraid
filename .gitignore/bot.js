const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "..";
const antiraidActivated = false;
const messageCheck = "";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
    if(antiraidActivated){
        antiraidActivated = false;
    }else{
        antiraidActivated = true;
    }
  message.channel.sendMessage("t");
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === prefix + "antiraid"){
        if(message.author.id === "450605029036916739"){
            if(args.length >= 1){
                if(args[1] === "off"){
                    antiraidActivated = false;
                    messageCheck = "";
                    message.channel.sendMessage("AntiRaid OFF");
                }else{
                    if(antiraidActivated === true){
                        messageCheck = message.content.replace(prefix + "antiraid", "");
                    }else{
                        message.channel.sendMessage("AntiRaid ON");
                        antiraidActivated = true;
                        messageCheck = message.content.replace(prefix + "antiraid", "");
                    }
                }
            }
        }
    }
});

client.on('message', message => {
    if(antiraidActivated === true){
        if(message.content === messageCheck){
            message.delete(1);
        }
    }
});

client.login('NTg3MDcwOTI2MjQ0NDEzNDQw.XPxOaw.ssAjKKa5-cNZyoTA63FS3rPSbMc');
