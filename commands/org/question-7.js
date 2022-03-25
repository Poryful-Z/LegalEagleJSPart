const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`__**Question 7**__. Before we go onto the last question, we like to use images to represent you throughout the season. Please send a picture of what you would like that representation to be! This will have no effect on your interview and can be changed later.\n\nUse \`eagle!question-8\` to continue!`);

} 


module.exports.help = {
    name: "question-7",
    aliases: ["question7"],
    usage: `q7`
}