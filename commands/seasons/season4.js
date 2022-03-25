const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0x0cbc04

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Peru", 'https://media.discordapp.net/attachments/756304803398680609/759226399130910810/PeruLogo-2.png')
        .setTitle("Peru")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n18th:	Ryan\n17th:	Jess\n16th:	ThatGuy\n15th:	Haleigh\n14th:	Borto\n13th:	Dallas\n12th:	Shaina Nichole\n11th:	Archie\n10th:	Vapor\n9th:	Flutters\n8th:	Plushy\n7th:	Carson\n6th:	Toon\n5th:	Gruff\n4th:	BT\n3rd:	Gem\n2nd:	Sally\n1st:	[Redacted]\n\n[Season Link](https://discord.gg/FPaZH2t)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759226399130910810/PeruLogo-2.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "peru",
    aliases: ["season4", "s4"],
    usage: `Season 4`
}
