const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0x04e4dc

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Galaxy", 'https://media.discordapp.net/attachments/756304803398680609/759227410003525702/logo3-1.png')
        .setTitle("Galaxy")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n18th:	Shadow\n17th:	Dean\n16th:	Pyos\n15th:	Ano\n14th:	Tar\n13th:	Will\n12th:	Bruno\n11th:	JD\n10th:	Nerf\n9th:	Paige\n8th:	Capt\n7th:	Lafa\n6th:	Grean\n5th:	Matt\n4th:	Cooper\n3rd:	JT\n2nd:	Matthew\n1st:	Jolsone\n\n[Season Link](https://discord.gg/gKYzfX3)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759227410003525702/logo3-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "galaxy",
    aliases: ["season12", "s12"],
    usage: `Season 12`
}
