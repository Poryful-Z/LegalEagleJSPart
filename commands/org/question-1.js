const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`__**Question 1**__. Welcome back to Coolvivor! Please introduce yourself and if anything changed from your previous season! What would you consider your main personality traits? We're more interested in reconnecting with you as a person than you as a player for this one! Tell us whatever you are comfortable sharing!\n\nUse \`eagle!question-2\` to continue!`);

} 


module.exports.help = {
    name: "question-1",
    aliases: ["question1"],
    usage: `q1`
}