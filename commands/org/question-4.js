const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`__**Question 4**__. If you play video games, what's your go-to strategy?\n
A. Careful planning and exploiting an opponent's weakness.\n
B. Button mashing, hoping for the best, and relying on unpredictability.\n\nUse \`eagle!question-5\` to continue!`);

} 


module.exports.help = {
    name: "question-4",
    aliases: ["question4"],
    usage: `q4`
}