const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`__**Question 6**__. The overall Mortal Kombat story's thesis is overcoming a powerful challenge through the power of determination and teamwork. What is something from your life (if you feel comfortable telling a story, you certainly may) that you draw inspiration and courage from?\n\nUse \`eagle!question-7\` to continue!`);

} 


module.exports.help = {
    name: "question-6",
    aliases: ["question6"],
    usage: `q6`
}