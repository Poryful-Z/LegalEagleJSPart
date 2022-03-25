const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {    let gatewayLatency = Math.floor(bot.ws.ping);
    message.channel.send("Pinging...").then(m => {
        const trip = Math.floor(m.createdTimestamp - message.createdTimestamp);
        const embed = new MessageEmbed()
            .setTitle("Pong!")
            .addField("API Latency", `${gatewayLatency}ms`, true)
            .addField("Bot Latency", `${trip}ms`, true)
            .setColor("#7289DA")
            .setTimestamp();
        m.edit(embed);
    });
}

module.exports.help = {
    name: "ping",
    aliases: ["pong", "latency"],
    usage: `ping`
}
