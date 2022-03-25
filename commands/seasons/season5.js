const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0x04fcc4

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: New Zealand", 'https://media.discordapp.net/attachments/756304803398680609/759226512138043402/NewZealand_Logo-1.png')
        .setTitle("New Zealand")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n20th	Reazo\n19th	Adam\n18th:	Armand\n17th:	BJ\n16th:	Emil\n15th:	Cascade\n14th:	Mitchell\n13th:	Ace\n12th:	Yotebag\n11th:	Eli\n10th:	Romey\n9th:	Eric\n8th:	Bill\n7th:	Echo\n6th:	King Coffee\n5th:	Lenny\n4th:	Chrunch\n3rd:	Natalie\n2nd:	LSE\n1st:	Flak\n\n[Season Link](https://discord.gg/EZXaJD7)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759226512138043402/NewZealand_Logo-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "new-zealand",
    aliases: ["newzealand", "season5", "s5"],
    usage: `Season 5`
}
