const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  var embed = new Discord.RichEmbed()
      .setDescription(`**${message.author.tag}** | :ping_pong: Ping : ${bot.ping}ms`)
  message.channel.send(embed)
      .catch(console.error);
}

module.exports.help = {
  name:"ping"
}
