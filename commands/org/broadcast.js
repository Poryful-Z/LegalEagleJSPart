const { Discord } = require('discord.js');
const { channel } = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (message.member.hasPermission('MANAGE_GUILD')) {

var guild = message.guild

let confq = message.content.substring(16);
   // const guild = message.guild;

    const CategoryChannel = guild.channels.cache.filter(c => c.name == "Confessionals");

    CategoryChannel.forEach((category) => {category.children.forEach((channel) => {if(channel.type === 'text') {channel.send(`${confq}`)}})})
} else {
  message.channel.send('You don\'t have permissions to run this command')
}
};

module.exports.help = {
    name: "broadcast",
    aliases: ["castbroad", "sendconfs"],
    usage: `Broadcast Msg`
}
