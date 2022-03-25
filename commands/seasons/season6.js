const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0xfc4c54

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Anguilla", 'https://media.discordapp.net/attachments/756304803398680609/759226614608298006/Untitled378-7-1.png')
        .setTitle("Anguilla")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n20th	Flak 2.0\n19th	Dairy 2.0\n18th:	BT 2.0\n17th:	Pigg 2.0\n16th:	Lenny 2.0\n15th:	Sófi 2.0\n14th:	Dani 2.0\n13th:	Ian 2.0\n12th:	Simon 2.0\n11th:	Nico III 2.0\n10th:	Will 2.0\n9th:	Frosty 2.0\n8th:	Echo 2.0\n7th:	Gem 2.0\n6th:	Rob 2.0\n5th:	Jett 2.0\n4th:	Carson 2.0\n3rd:	Bryson 2.0\n2nd:	Gruff 2.0\n1st:	LSE 2.0\n\n[Season Link](https://discord.gg/kqM679t)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759226614608298006/Untitled378-7-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "anguilla",
    aliases: ["season6", "s6"],
    usage: `Season 6`
}
