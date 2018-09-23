const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

tpembed = new Discord.RichEmbed()
.setColor("#0FBDF7")
.addField("Topic officiel :", "https://community.funcraft.net/threads/reality-rc-on-9.85556/");

message.channel.send(tpembed);

}

module.exports.help = {
  name:"topic"
}
