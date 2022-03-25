const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0x1454bc

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Bermuda Triangle", 'https://media.discordapp.net/attachments/756304803398680609/759226715162673243/BermudaTriangleLogo-1.png')
        .setTitle("Bermuda Triangle")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n18th:	Kyle\n17th:	Devon\n16th:	Ashlee\n15th:	Pete\n14th:	Shinx\n13th:	Carter\n12th:	Payton\n11th:	Jonny\n10th:	Ben\n9th:	Sarah\n8th:	Scarlet\n7th:	Natalie\n6th:	Connor\n5th:	Lexi\n4th:	Ari\n2nd:	Bbri\n2nd:	Preppy\n1st:	Brad\n\n[Season Link](https://discord.gg/ZAPxvCE)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759226715162673243/BermudaTriangleLogo-1.png")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "bermuda-triangle",
    aliases: ["bermudatriangle", "season7", "s7", "bermuda"],
    usage: `Season 7`
}
