const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0x34045c

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Hawkins", 'https://media.discordapp.net/attachments/756304803398680609/759227281905549362/logo-01-1.png')
        .setTitle("Hawkins")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n22nd	Knick\n21st	Paula\n20th	HoneyBiscuit\n19th	Josh\n18th:	Caleb\n17th:	Rexxy\n16th:	Matt\n15th:	Yellow\n14th:	Bendog\n13th:	Chai\n12th:	Waffle\n11th:	Bferd\n10th:	Olivia\n9th:	Brodie\n8th:	Mark\n7th:	Blake\n6th:	Justin\n5th:	Adam\n4th:	Lewis\n3rd:	Golden\n2nd:	BB10\n1st:	Exyss\n\n[Season Link](https://discord.gg/MGQVJtP)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759227281905549362/logo-01-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "hawkins",
    aliases: ["season11", "s11"],
    usage: `Season 11`
}
