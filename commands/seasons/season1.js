const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0xbd6ffb

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Maldives", 'https://media.discordapp.net/attachments/756304803398680609/759225592473452604/Cools_Maldives_1-1.png')
        .setTitle("Maldives")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n18th:	Toe\n17th:	Patrick\n16th:	Pendant\n15th:	Drew\n14th:	Nika\n13th:	Nick\n12th:	Kai\n11th:	Ollie\n10th:	Marcell\n9th:	Mini\n8th:	Zaden\n7th:	Maddie\n6th:	Sófi\n5th:	Frosty\n4th:	Dairy\n3rd:	Ian\n2nd:	Nico III\n1st:	Nevaeh\n\n[Season Link](https://discord.gg/bpNSq25)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759225592473452604/Cools_Maldives_1-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "maldives",
    aliases: ["s1", "season1"],
    usage: `Season 1`
}
