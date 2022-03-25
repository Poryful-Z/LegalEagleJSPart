const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0xffd029

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Bora Bora", 'https://media.discordapp.net/attachments/756304803398680609/759225677034946600/Survivor_Bora_Bora_1-1.png')
        .setTitle("Bora Bora")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n18th:	Urban\n17th:	Britney\n16th:	Big\n15th:	Zerk\n14th:	Dark\n13th:	Pory\n12th:	Yag\n11th:	Sam\n10th:	Dag\n9th:	Diro\n8th:	Nick\n7th:	Gus\n6th:	Dylan\n5th:	Buru\n4th:	Will\n3rd:	Johnathan\n2nd:	Bryson\n1st:	Dani\n\n[Season Link](https://discord.gg/35nBXWR)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759225677034946600/Survivor_Bora_Bora_1-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "borabora",
    aliases: ["bora-bora", "season2", "s2"],
    usage: `Season 2`
}
