const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`__**Question 2**__. For those unfamiliar with your previous season, roughly explain your journey in your OG season to us! What do you believe is the biggest reason you did not win the game? How do you plan to change that in this season?\n\nUse \`eagle!question-3\` to continue!`);

} 


module.exports.help = {
    name: "question-2",
    aliases: ["question2"],
    usage: `q2`
}