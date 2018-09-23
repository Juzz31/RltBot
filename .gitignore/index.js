const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

let purple = botconfig.purple;
var prefix = botconfig.prefix

const size    = botconfig.colors;



fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Erreur : la commmande est introuvable !");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("by Juzz#5537");
});

const serverStats = {

  TotalUsersID: '493403193066127362',
  guildID: '487315552793264138'

};

bot.on("message", async message => {

  if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let msg = message.content.toUpperCase();
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);


  var suffix = message.content.split(' ').slice(1);

  if (msg.content === 'test') {
    msg.reply('Pong!');
  }

});


bot.on("guildMemberAdd", member => {

  if(member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.TotalUsersID).setName(`Membres Totaux : ${member.guild.memberCount}`);


});

bot.on("guildMemberRemove", member => {

  if(member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.TotalUsersID).setName(`Membres Totaux : ${member.guild.memberCount}`);

});


//member.user.username
//member.user.tag
//member.displayName



bot.login(tokenfile.token);
