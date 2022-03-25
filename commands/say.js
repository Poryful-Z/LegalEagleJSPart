const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
if (message.member.hasPermission('MANAGE_GUILD')) {
if (message.author.bot) return;
        if (message.mentions.channels.size == 0) {
          message.delete()
          let sentthing = message.cleanContent.substring(9);
          message.channel.send(sentthing)/*.then((msg) => msg.pin())*/;

        } else {
          let testchannel = message.mentions.channels.first();
          // Get the message to print

          let args = message.cleanContent.split(" ").slice(2);
          let saytext = args.join(" ");
          testchannel.send(saytext);
          message.delete();


        }
}
};

module.exports.help = {
  name:"say",
  aliases: ["yas"]
}