const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();


    if(!args[0]) {
      message.channel.send("Vous devez renseigner une suggestion...");
      return;
    }

    message.channel.send("Merci pour votre suggestion d'amélioration du bot, nous la traitons au plus vite");

  const candidMessage = args.join(" ");

  const mdembed = new Discord.RichEmbed()
  .setTitle("~~Suggestion~~")
  .addField("auteur :", message.author.tag)
  .addField('Candidature :', candidMessage);

  message.guild.channels.find('name', "💥-suggestions-bot").send(mdembed)
  .then((newMessage) => {
      newMessage.react("👎");
      newMessage.react("👍");
      newMessage.pin()
  });

}

module.exports.help = {
  name: "suggestion"
}
