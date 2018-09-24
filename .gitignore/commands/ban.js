const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Je ne trouve pas cet utilisateur...");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Cette personne ne peut être bannie");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Utilisateur Banni", `${bUser} avec comme ID ${bUser.id}`)
    .addField("Banni Par", `<@${message.author.id}> avec comme ID ${message.author.id}`)
    .addField("Banni Dans", message.channel)
    .addField("Heure", message.createdAt)
    .addField("Raison", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Je ne trouve pas de channel logs");

    message.guild.member(bUser).ban(bReason);
    message.delete().catch(O_o=>{});
    incidentchannel.send(banEmbed);

    var userban = message.mentions.users.first();
    userban.send(`Vous avez été banni de ${message.guild.name} pour ${bReason}`);
}

module.exports.help = {
  name:"ban"
}
