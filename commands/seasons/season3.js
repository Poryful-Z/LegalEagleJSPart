const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0xfcccfc

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Taiwan", 'https://media.discordapp.net/attachments/756304803398680609/759225884011003964/SurvivorTaiwanLogo-1.png')
        .setTitle("Taiwan")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n18th:	Shangela\n17th:	Kai\n16th:	T-Boz\n15th:	Mug\n14th:	Gabriella\n13th:	Chadd\n12th:	Alex\n11th:	Zeph\n10th:	Whoopi\n9th:	Trevor\n8th:	Jason\n7th:	Jett\n6th:	Kory\n5th:	Simon\n4th:	Doozy\n3rd:	Pigg\n2nd:	Rob\n1st:	Hannibal\n\n[Season Link](https://discord.gg/wXgrsdE)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759225884011003964/SurvivorTaiwanLogo-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "taiwan",
    aliases: ["season3", "s3"],
    usage: `Season 3`
}
