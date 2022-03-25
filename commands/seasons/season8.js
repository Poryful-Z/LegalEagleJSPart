const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0xa40404

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Nepal", 'https://media.discordapp.net/attachments/756304803398680609/759226832905175090/NepalLogo_1-1.png')
        .setTitle("Nepal")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n20th	Enzo\n19th	Nick\n18th:	Spencer\n17th:	Ramos\n16th:	Dino\n15th:	Romey 2.0\n14th:	Ryan\n13th:	Danny\n12th:	Trevor 2.0\n11th:	Aurora\n10th:	Bread\n9th:	Cody\n8th:	Dag 2.0\n7th:	Rize\n6th:	Ethan\n5th:	Gabe\n4th:	M00n\n2nd:	Kevin\n2nd:	Ky\n1st:	Maddie 2.0\n\n[Season Link](https://discord.gg/K4CXkPC)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759226832905175090/NepalLogo_1-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "nepal",
    aliases: ["season8", "s8"],
    usage: `Season 8`
}
