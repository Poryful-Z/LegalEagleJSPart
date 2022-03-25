const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0xfcf4f4

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: France", 'https://media.discordapp.net/attachments/756304803398680609/759227100250767380/circle_logo_f1-01-1.png')
        .setTitle("France")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n20th	Kai 2.0\n19th	Ace 2.0\n18th:	Shinx 2.0\n17th:	Zanny\n16th:	Payton 2.0\n15th:	Ren\n14th:	Arctos\n13th:	Phoenix 2.0\n12th:	Dino 2.0\n11th:	Katie\n10th:	Nick 2.0\n9th:	Yotebag 2.0\n8th:	Delta 2.0\n7th:	Gimp\n6th:	Jacob\n5th:	Tristan\n4th:	Michael\n3rd:	Jack\n2nd:	Jackson\n1st:	Pory 2.0\n\n[Season Link](https://discord.gg/FbZskQA)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759227100250767380/circle_logo_f1-01-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "france",
    aliases: ["season10", "s10"],
    usage: `Season 10`
}
