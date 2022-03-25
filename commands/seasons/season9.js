const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0xfc9c04

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Hyrule", 'https://media.discordapp.net/attachments/756304803398680609/759226950983876617/Hyrule_Logo-1.png')
        .setTitle("Hyrule")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n21st	Sass\n20th	Jules\n19th	Sniper\n18th:	Pyro\n17th:	Delta\n16th:	Helix\n15th:	Phoenix\n14th:	Aqua\n13th:	Tragic\n12th:	Caleb\n11th:	Seph\n10th:	Letters\n9th:	Christian\n8th:	Xerop\n7th:	BNQ\n6th:	Nick\n5th:	Agent\n4th:	Charan\n3rd:	Ryan\n2nd:	Jericho\n1st:	Andy\n\n[Season Link](https://discord.gg/bBQKm6r)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759226950983876617/Hyrule_Logo-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "hyrule",
    aliases: ["season9", "s9"],
    usage: `Season 9`
}
