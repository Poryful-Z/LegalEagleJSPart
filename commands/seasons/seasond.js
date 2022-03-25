const { Discord } = require('discord.js');
const { channel } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const es1 = 0xc404a4

module.exports.run = async (bot, message, args) => {

var serverIcon = message.guild.iconURL();
    const embed = new MessageEmbed()
        .setAuthor("Cool Survivor: Bikini Bottom", 'https://media.discordapp.net/attachments/756304803398680609/759227558692388874/wheel_logo-1.png?width=576&height=585')
        .setTitle("Bikini Bottom")
        .setURL("https://docs.google.com/spreadsheets/d/1aQ1KXX4mxTxAcvMz6S-V8sz-1rNKP2HVDqW7sTy3pG8/edit#gid=1919433820")
        .setDescription(`\n21st	Bill 2.0\n20th	Tar 2.0\n19th	Tragic 2.0\n18th:	Chai 2.0\n17th:	Plushy 2.0\n16th:	Cascade 2.0\n15th:	Ramos 2.0\n14th:	Will 2.0\n13th:	Helix 2.0\n12th:	Ryan 2.0\n11th:	Preppy 2.0\n10th:	Rize 2.0\n9th:	Cody 2.0\n8th:	Jack 2.0\n7th:	Borto 2.0\n6th:	Josh 2.0\n5th:	Ren 2.0\n4th:	Matthew 2.0\n3rd:	Cooper 2.0\n2nd:	Capt 2.0\n1st:	Jacob 2.0\n\n[Season Link](https://discord.gg/cXqzwH7)\n** **`)
        .setColor(es1)
        .setTimestamp()
        .setThumbnail("https://media.discordapp.net/attachments/756304803398680609/759227558692388874/wheel_logo-1.png?width=576&height=585")
        .setFooter(message.author.tag, serverIcon);
        
    
    return message.channel.send(embed);

};

module.exports.help = {
    name: "bikini-bottom",
    aliases: ["season13", "s13", "bikini", "bottom", "bikinibottom"],
    usage: `Season 13`
}
