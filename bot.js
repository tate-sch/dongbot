// Module Imports
const Discord = require('discord.js');
const colors = require('colors');
const config = require("./config.json");

const client = new Discord.Client();
client.login(config.token);

const PREFIX = 'd!';

client.on('ready', () => {
 console.log(`${client.user.tag} is online`);
 client.user.setPresence({ activity: { name: `lol harvy good coder` }, type: "PLAYING", status: 'online' });
})

client.on("message", async message => {
 if(message.author.bot) return;
 if (message.channel instanceof Discord.DMChannel) return;
 if(message.content.indexOf(config.prefix) !== 0) return;
    
 const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
 const devid = "487569711857401856"

//Command - ping
 if(command === `ping`) {
  const m = await message.channel.send(`Pinging...`)
  m.edit(`**Pong!** ${m.createdAt - message.createdAt} ms`)
    }

//Command - membercount
 if (command === 'membercount') {
  message.channel.send({embed: {
   "color": "RANDOM",
    "fields": [
      {
      "name": "Total Members",
      "value": message.guild.members.cache.size,
      "inline": true
      }]}})}
  
//Command  - help   
 if (command === 'help') {
  message.channel.send({embed: {
   "title": `${client.user.username} Help`,
   "description": "Prefix: ``d!`` Version: `Beta 1.0`\n",
    "color": "RANDOM",
     "fields": [
     {
       "name": "Commands",
       "value": "d!help -This menu\nd!ping - Check the bots latency\nd!stats - See the bots stats\nd!dog - Get a pic of a cute dog (API test)\nd!membercount - Total members in a server (Cache test)\n\n\n"
        }
         ],
        "footer": {
        "text": "Made by KKingTate & Spudz35"
                },
                "timestamp": new Date()
              }})}
    
  //Command - say
  if(command === "say")  {
   var say = args.join(" ")
   if(!say) say = ("You didn't say anything")
    message.channel.send(`you said: ${say}`)
   }

//Your commands:
 if(command === "reece") {
  message.channel.send("you have awoken the beast https://cdn.discordapp.com/attachments/702298084012720190/706729053230465064/unknown.png")
  }
 if(command === "bash") {
  message.channel.send("you're fucked now... https://cdn.discordapp.com/attachments/702298084012720190/745134709146779659/unknown.png")
  }
  if(command === "power") {
   message.channel.send("unbelievable power... https://cdn.discordapp.com/attachments/702298084012720190/709237478623805520/image0.jpg")
  }
  if(command === "userinfo") {
   let member = message.mentions.members.first()
   if(!member) member =  message.author,
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
  if(command === "amongus")  {
   const type = ["Crewmate", "Imposter", "Crewmate", "Crewmate"]
   const randomtype = type[Math.floor(Math.random() * type.length)];
   const location = ["Admin", "Cafe", "Weapons", "Storage", "Comunications, Reactor"]
   const randomlocation = location[Math.floor(Math.random() * location.length)];
   const m = await message.author.send(`You are: \`${randomtype}\`\nYou spawned at: \`${randomlocation}\``)
    m.react('⬆️'); m.react('⬅️'); m.react('⬇️'); m.react('➡️');
  }

})
