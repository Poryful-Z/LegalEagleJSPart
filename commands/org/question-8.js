const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`__**Question 8**__. This is it, the last question, so give it all you got! Don't hold back! Why should you be cast for this season? What makes you like no other applicant? How will you stand out? Everything you haven't gotten to mention in this interview, now is your chance to do so!\n\nUse \`eagle!complete\` to continue!`);

}


module.exports.help = {
    name: "question-8",
    aliases: ["question8"],
    usage: `q8`
}