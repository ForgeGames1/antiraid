const Discord = require('discord.js');
const clientFunRadio = new Discord.Client();
const clientNRJ = new Discord.Client();

clientFunRadio.login('NTg4MDYwMTAzODUzMjExNjU5.XP_nsw.XWJUmX7sp4IWGQ_muRv6SR_xtoY');
clientNRJ.login('NTg4MDYwNTU4MTIxNTAwNjc1.XP_oHA.vy02nb4NZHmVzW8dYUUb1-Enhlk');

clientFunRadio.on("ready", () => {
    clientFunRadio.user.setActivity("Manage by ForgeGames", { type: "STREAMING", url: "https://www.twitch.tv/FunRadio" })
})

clientNRJ.on("ready", () => {
    clientNRJ.user.setActivity("Manage by ForgeGames", { type: "STREAMING", url: "https://www.twitch.tv/NRJ" })
})


clientFunRadio.on('message', async message => {

  if (!message.guild) return;

  if (message.content === '/join FunRadio') {
    if(message.author.isOwner  || message.author.id === '586831689033187355'){
    if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.join();

      connection.playStream('http://streaming.radio.funradio.fr/fun-1-48-192', {
  volume: 0.1,
  passes: 3
});
  }else{
    message.channel.send("Erreur pas dans un channel");
  }
}else{
  message.channel.send("Erreur pas la permission");
}
}
});

clientNRJ.on('message', async message => {

  if (!message.guild) return;

  if (message.content === '/join NRJ') {
    if(message.author.isOwner || message.author.id === '586831689033187355'){
      if (message.member.voiceChannel) {
        const connection1 = await message.member.voiceChannel.join();

        connection1.playStream('http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3?origine=fluxradios', {
            volume: 0.1,
            passes: 3
        });
      }else{
        message.channel.send("Erreur pas dans un channel");
      }
    }else{
      message.channel.send("Erreur pas la permission");
    }
}
});
