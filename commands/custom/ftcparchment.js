const Discord = require("discord.js");
const { registerFont } = require('canvas');
registerFont('Populationzerobb-ZDXK.otf', { family: 'Lobster' });
const Canvas = require('canvas');


exports.run = async (bot, message, args) => {

message.channel.send(`https://cdn.discordapp.com/attachments/799075146295148614/837018609272094760/image0.jpg`);

}

module.exports.help = {
    name: "ftc-parchment",
    aliases: ["ftcparch", "ftcparchment", "finalparch"],
    usage: `ftc`
}