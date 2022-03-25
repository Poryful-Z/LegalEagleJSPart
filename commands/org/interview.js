const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
var args = message.content.split(" ");
message.delete();
if (args.length === 2){
  let creator = (args[1]);
  const c1 = message.guild.channels.create(`${creator}-interview`, {
  
	type: 'text',
  parent: '955315272972128276',
	permissionOverwrites: [
		{
			id: message.guild.id,
			deny: ['VIEW_CHANNEL'],
		},
    {
			id: message.author.id,
			allow: ['VIEW_CHANNEL'],
		},
	],
}).then(channel => channel.send(`Welcome <@${message.author.id}>! Thank you for applying and welcome to the interview process! Our interview is automated and can be taken at your own pace as long as it is completed before <t:1652241600> (<t:1652241600:R>). Good luck!\n\nUse \`!interview-start\` to begin!`));

} else {
  message.channel.send('incorrect usage');
}  

}

module.exports.help = {
    name: "interview",
    aliases: [""],
    usage: `Interview`
}
