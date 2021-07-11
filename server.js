let Discord = require("discord.js");
let client = new Discord.Client();
//const Commando = require('discord.js-commando');

//const client = new Commando.Client({
//    owner: 'smoob#1490'
//});

var y = true;
client.on("message", message => {
  //     message.author.send("Welcome to the server! You can say !help to see how I work!");

  //  message.channel.send(message.content)
  if (message.author == 863476405757018123) {
    return;
  }
  if(message.content.toLowerCase().includes("cum")||message.author == 863476405757018123){
    message.delete();
  }
 
    if (message.content.includes(" ")==false) {
      var d = Math.random();
  //    message.channel.send(d);
if (d < 0.10){
    message.channel.send(message.content+" deez nuts");
//  message.channel.send("this is an automated message. Every time a single word message is sent, there is a 10% of chance of deez nuts firing off.")
  }
    //  message.channel.send("sorry testing for a minute."+d);
    }
  //  client.channels.cache.get("833797799476854787").send("Back online!");
   if(message.content.toLowerCase().includes("cum")){
    if(message.channel.id==698196921495584850||message.channel.id==772700655198535703||message.channel.id==706898655633997976||message.channel.id==704770780952657990||message.channel.id==704771046946898090||message.channel.id==813972300298846249||message.channel.id==825950245854380033||message.channel.id==826881805365018687||message.channel.id==833912748206587964||message.channel.id==861825247442763776){
    message.delete();
    }
  }
  
  if (message.content == "!less go") {
    message.channel.send("Less Gooo");
  }
  if (message.content.includes("!eval")) {
    if (message.author == 469252577326792704) {
      var nog = message.content.replace("!eval", "");
      message.channel.send(nog);
      message.delete();
    }
  }
  
  if (message.content === "help") {
    message.channel.send(
      "help deez nuts"
    );
  }

  /* 
  if (message.content === "ping") {
setInterval(function(){message.channel.send("10 minute check");},600000);
}
  */
  if (message.content === "hi") {
    message.channel.send("hi there!");
  }
  if (message.content === "hello") {
    message.channel.send("hello!");
  }
  if (message.content === "hey") {
    message.channel.send("hey beautiful");
  }
  //   Discord.MessageReaction(message.member, ":smile:", message.content);

  if (message.content === "test") {
    message.channel.send(":sunglasses:");
  }
  /*  
if(message.content === "embed") {
 let embed = new Discord.MessageEmbed()
 .setTitle("this is Emded title")
 .setDescription("RANDOM")
 .setColor("RANDOM")
 .setFooter("This is embed footer")
 message.channel.send(embed)
}
*/
});

client.login(process.env.TOKEN);

/*

 new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: '1Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: '2Some value here', inline: true },
		{ name: 'Inline field title', value: '3Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png')
  
  
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
  
  
  
*/
