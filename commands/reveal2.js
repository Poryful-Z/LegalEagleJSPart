const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
if (message.member.hasPermission('MANAGE_GUILD')) {
if (message.author.bot) return;

let memberoop = message.author.id

message.channel.send(`First of all, thank you <@${memberoop}> for typing the command! it means a lot that you did that!`);

setTimeout(function(){ message.channel.send ('for my next reveal, we have a person who is... a friend'); }, 3000);

    setTimeout(function(){ message.channel.send ('Something you should know about be, is that i wanna have some BESTIES PURRRRR.'); }, 6000);

     setTimeout(function(){ message.channel.send ('but sometimes friendship turns into friendshit ;)'); }, 9000);

setTimeout(function(){ message.channel.send ('anyways idk where im going with this cuz i forgot which one im revealing lmao'); }, 12000);

setTimeout(function(){ message.channel.send ('because my next reveal is....'); }, 15000);

setTimeout(function(){ message.channel.send ('<@500140869702254607>!'); }, 18000);

setTimeout(function(){ message.channel.send ('https://cdn.discordapp.com/attachments/835290633010544687/853745766139822120/CASTFONES.png'); }, 21000);

setTimeout(function(){ message.channel.send ('thats all from me! ill pass it to the next host! <@178303396850171904>'); }, 24000);

        }
};

module.exports.help = {
  name:"reveal2",
  aliases: ["2reveal"]
}