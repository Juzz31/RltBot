const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission pour faire cela...");
  if(!args[0]) return message.channel.send("non !");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});

  let cEmbed = new Discord.RichEmbed()
  .setDescription("~Clear~")
  .setColor("#00BFFF")
  .addField("Effacés Par", `<@${message.author.id}> avec comme ID ${message.author.id}`)
  .addField("Nombre de message effacés", args[0])
  .addField("Effacés Dans", message.channel)
  .addField("Heure", message.createdAt);

  let incidentchannel = message.guild.channels.find(`name`, "logs");
  if(!incidentchannel) return message.channel.send("Je ne trouves pas ce channel.");

    incidentchannel.send(cEmbed);
}

module.exports.help = {
  name: "clear"
}
