const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
if (message.member.hasPermission('MANAGE_GUILD')) {
if (message.author.bot) return;

message.channel.send('hey guys, its ur bestie james, im so sorry i couldnt be here for the cast reveal 😾😾😾');

setTimeout(function(){ message.channel.send ('although theres a rly hot bot, made by 2 really cool people HMM, and itll be doing the cast reveal!'); }, 3000);

    setTimeout(function(){ message.channel.send ('my first reveal is a very fun person!'); }, 6000);

     setTimeout(function(){ message.channel.send ('m first reveal is a very fun person!'); }, 9000);

setTimeout(function(){ message.channel.send ('m frst reval is a vry fun PeRson!'); }, 12000);

setTimeout(function(){ message.channel.send ('m frirst rvael si a vry fnu pEson!'); }, 15000);

setTimeout(function(){ message.channel.send ('anyways, my reveal is a super fun PLANET, and an awesome person!'); }, 18000);

setTimeout(function(){ message.channel.send ('Come on in... <@598107524704632841>!'); }, 21000);

setTimeout(function(){ message.channel.send ('https://cdn.discordapp.com/attachments/835290633010544687/853737315599515668/CASTPLUTO.png'); }, 24000);

setTimeout(function(){ message.channel.send ('for my next reveal, somebody make a host type eagle!reveal2'); }, 27000);

        }
};

module.exports.help = {
  name:"reveal1",
  aliases: ["1reveal"]
}