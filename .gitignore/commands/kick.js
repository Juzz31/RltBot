const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Je ne trouves pas cet utilisateur");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Cette personne ne peut être bannie");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Utilisateur Kick", `${kUser} with ID ${kUser.id}`)
    .addField("Kick Par", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kick Dans", message.channel)
    .addField("Heure", message.createdAt)
    .addField("Raison", kReason);

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("Je ne trouves pas de channel logs");

    message.guild.member(kUser).kick(kReason);
    message.delete().catch(O_o=>{});
    kickChannel.send(kickEmbed);

    var userkick = message.mentions.users.first();
    userkick.send(`Vous avez été kick dans ${message.guild.name} pour ${kReason}`);
}

module.exports.help = {
  name:"kick"
}
