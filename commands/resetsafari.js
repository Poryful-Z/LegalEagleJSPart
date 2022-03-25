const { Discord } = require('discord.js');
const { channel } = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (message.member.hasPermission('MANAGE_GUILD')) {

var guild = message.guild

   // const guild = message.guild;

    const CategoryChannel = guild.channels.cache.filter(c => c.name == "Escape Room 1");

    CategoryChannel.forEach((category) => {category.children.forEach((channel) => {if(channel.type === 'text') {channel.bulkDelete(100)}})})
} else {
  message.channel.send('You don\'t have permissions to run this command')
}
};

module.exports.help = {
    name: "resetsafari",
    aliases: [],
    usage: `Reset Safari`
}
