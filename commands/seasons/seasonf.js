const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0x17a15c

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Gravity Falls", 'https://media.discordapp.net/attachments/756304803398680611/758523312925573150/logo.png?width=585&height=585')
        .setTitle("Gravity Falls")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n20th:	Pete\n19th:	Cheryl\n18th:	Gruff\n17th:	Hannah\n16th:	Kat\n15th:	Xerop\n14th:	Lenny\n13th:	Cabbate\n12th:	Cara\n11th:	Jaye\n10th:	Brad\n9th:	Matt\n8th:	Charan\n7th:	Rize\n6th:	Brady\n5th:	Cody\n4th:	Tim\n3rd:	Shinx\n2nd:	Agent\n1st:	Jolsone\n\n[Season Link](https://discord.gg/nwsSAQ5aGz)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680611/758523312925573150/logo.png?width=585&height=585")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "gravity-falls",
    aliases: ["season15", "s15", "gravity", "falls", 
    "gravityfalls"],
    usage: `Season 15`
}
