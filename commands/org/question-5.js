const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`__**Question 5**__. Your opponent is weak, now's your chance! How do you finish them? Describe your finishing move.
https://img1.svg.com/img/gallery/the-absolute-best-fatalities-in-every-mortal-kombat-game/intro-1549741813.jpg\n\nUse \`eagle!question-6\` to continue!`);

} 


module.exports.help = {
    name: "question-5",
    aliases: ["question5"],
    usage: `q5`
}