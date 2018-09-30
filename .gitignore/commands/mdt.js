const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let wins = JSON.parse(fs.readFileSync("./wins.json", "utf8"));
let lose = JSON.parse(fs.readFileSync("./loose.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!mdt win
  //!mdt loose

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Vousn'avez pas la permission pour faire cette commande");

  if(args[0] == "win") {

    wins.wins++;

    fs.writeFile("./wins.json", JSON.stringify(wins), (err) => {
      if (err) console.log(err)
    });

    message.channel.send("Vous avez bien ajouté une victoire au topic.");

  }

  if(args[0] == "lose") {

    lose.lose++;

    fs.writeFile("./loose.json", JSON.stringify(lose), (err) => {
      if (err) console.log(err)
    });

    message.channel.send("Vous avez bien ajouté une défaite au topic.");

  }

}

module.exports.help = {
  name:"mdt"
}
