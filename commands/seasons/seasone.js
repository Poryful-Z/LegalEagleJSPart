const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0xfb6300

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Camp Half-Blood", 'https://media.discordapp.net/attachments/756304803398680609/759227773784424448/CampHalfBlood2-2.png?width=914&height=585')
        .setTitle("Camp Half-Blood")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n21st	Roxy\n20th	Fish\n19th	Spicy\n18th:	Josh\n17th:	Panda\n16th:	Ethan\n15th:	Matthew\n14th:	Withor\n13th:	Cass\n12th:	Beaker\n11th:	Oak\n10th:	Karim\n9th:	Kelsea\n8th:	Aqua\n7th:	Iznel\n6th:	May\n5th:	Dylan\n4th:	Ani\n3rd:	Marcus\n2nd:	Tony\n1st:	Hunter\n\n[Season Link](https://discord.gg/n83Kexe)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759227773784424448/CampHalfBlood2-2.png?width=914&height=585")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "camp-half-blood",
    aliases: ["season14", "s14", "camphalfblood", "chb", 
    "ch-b"],
    usage: `Season 14`
}
