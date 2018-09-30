const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let wins = JSON.parse(fs.readFileSync("./wins.json", "utf8"));
let lose = JSON.parse(fs.readFileSync("./loose.json", "utf8"));


module.exports.run = async (bot, message, args) => {

  let rsltlose = lose.lose;
  let rsltwins = wins.wins;

  let rembed = new Discord.RichEmbed()
  .setColor("#0FBDF7")
  .addField("win :", rsltwins)
  .addField("lose :", rsltlose)

  message.channel.send(rembed)

}

module.exports.help = {
  name: "result"
}
