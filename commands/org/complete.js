const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
var args = message.content.split(" ");
if (message.channel.parentID === '872603694514982972') {
  message.channel.setParent('872603729860390934').then(channel => channel.send(`Thank you for completing your interview! If you would ever like to go back and edit your answers, you may do so as well! Check ins will be open on August 27th, so all you have to do before the season begins is on August 27th come into this channel and check in! Don't worry, we'll give you a ping to remind you.`));

} else {
  message.channel.send('incorrect usage');
}  

}

module.exports.help = {
    name: "complete",
    aliases: [],
    usage: `Complete Interview`
}
