const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`__**Question 3**__. Final question! Is there anything else you would like the spectators to know?\n\nUse \`eagle!complete\` to continue!`);

} 


module.exports.help = {
    name: "question-3",
    aliases: ["question3"],
    usage: `q3`
}