const Discord = require('discord.js'); 
const client = new Discord.Client();

client.once('ready'), () => {
    console.log('Ready!');
}


client.login(DISCORDJS_BOT_TOKEN);