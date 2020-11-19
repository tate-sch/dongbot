const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.login(config.token);
var colors = require('colors');
const sickladshook = new Discord.WebhookClient('727678436952244234', 'qYbhdnGJe_RTXltkRWtxk19w0kdCzClNNDjWkSDbjY_vcnS8hBZQJX9KsidBNtMtMjyq');
const loghook = new Discord.WebhookClient('727738132216414303', '5Q1JUnmNz05izuD0HgUT8CLqVzP4q6OxU8gdrexICYoseKlrdzdLsxSk1k32PmhS4NDE');
const PREFIX = 'd!';

client.on("disconnect", function(event){
  console.log(`[DISCONNECT] The WebSocket has closed and will no longer attempt to reconnect`.red);
});

client.on("error", function(error){
  console.error(`[${client.user.tag}] [INFO] WebSocket encountered a connection error: ${error}`).blue;
});

client.on("reconnecting", function(){
  console.log(`[INFO] Attempting to reconnect to the WebSocket`.blue);
});

client.on("warn", function(info){
  console.log(`[${client.user.tag}] [WARN] ${info}`.yellow);
});

client.on('ready', () => {
    console.log(`[${client.user.tag}] [INFO] Client has started`.cyan.bold);
    console.log(`[${client.user.tag}] [INFO] Client stats: ${client.users.cache.size} users | ${client.channels.cache.size} channels | ${client.guilds.cache.size} guilds`);
    client.user.setPresence({ activity: { name: `d!help | ${client.user.username}` }, type: "PLAYING", status: 'online' });
})



  client.on("guildDelete", guild => {  
    console.log(`[${client.user.tag}] [INFO] removed from: ${guild.name} (id: ${guild.id})`.blue);
  });


client.on("message", async message => {
    if(message.author.bot) return;
    if (message.channel instanceof Discord.DMChannel) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const devid = "487569711857401856"
    
    if(command === `ping`) {
        const m = await message.channel.send(`Pinging...`)
      m.edit(`**Pong!** ${m.createdAt - message.createdAt} ms`)
    }

    if (command === 'membercount') {
        message.channel.send({embed: {
          "color": "RANDOM",
          "fields": [
            {
              "name": "Total Members",
              "value": message.guild.members.cache.size,
              "inline": true
            }
          ]
      }
  
    }
        )}
//IGNORE THIS API SHIT (IT WILL JUST CONFUSE)
        const axios = require('axios')
        if (command === 'dog') {
            const m = await message.channel.send(":dog: Looking for a doggo...")
            axios.get('https://some-random-api.ml/img/dog')
              .then(response => {
                message.channel.send({embed: {
                  "title": ":dog: Bork",
                  "url": (response.data.link),
                  "color": "RANDOM",
                  "footer": {
                    "text": message.author.tag,
                    "icon_url": message.author.displayAvatarURL()
                },
               "timestamp" : new Date(),
                  "image": {
                    "url": (response.data.link)
                  }
                }
              }
                )
                  m.delete()
                .catch(error => {
                  console.log(error);
                }
                
                )}
                )}
    
      //Help command (embed)          
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
              }
                  }
                  )}

//ALSO IGNORE THIS SHIT \/
                  
                  function msToTime(ms){
                    days = Math.floor(ms / 86400000); // 24*60*60*1000
                    daysms = ms % 86400000; // 24*60*60*1000
                    hours = Math.floor(daysms / 3600000); // 60*60*1000
                    hoursms = ms % 3600000; // 60*60*1000
                    minutes = Math.floor(hoursms / 60000); // 60*1000
                    minutesms = ms % 60000; // 60*1000
                    sec = Math.floor(minutesms / 1000);
                  
                    let str = "";
                    if (days) str = str + days + "d ";
                    if (hours) str = str + hours + "h ";
                    if (minutes) str = str + minutes + "m ";
                    if (sec) str = str + sec + "s ";
                  
                    return str;
                  }

                  if(command === `stats`) {
                    const m = await message.channel.send({embed: {
                    "title": `Pinging...`
                  }})
                  m.edit({embed: {
                      "title": `${client.user.username} - Statistics`,
                    "description":`**Ping:** ${m.createdAt - message.createdAt} ms\n**API:** ${Math.round(client.ws.ping)} ms\n**Uptime:** ${msToTime(client.uptime)}\n**Status:** <:green:714719173636390933><:green:714719173636390933><:green:714719173636390933><:green:714719173636390933><:green:714719173636390933>`,
                    "color": "RANDOM",
                    "footer": {
                        "text":`${message.author.tag}`,
                        "icon_url": `${message.author.displayAvatarURL()}`
                      },
                      "timestamp": new Date(),
                    }
                  }
                  )}
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
                    //^^this lets the bot get other users info if there mentioned or there id is pasted 
                  if(!member) member =  message.author,
                    //^^this defaults to the author if no user is mentioned
                    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
                        }
                  if(command === "amongus")  {
                        const type = ["Crewmate", "Imposter", "Crewmate", "Crewmate"]
                        const randomtype = type[Math.floor(Math.random() * type.length)];
                                           
                        const location = ["Admin", "Cafe", "Weapons", "Storage", "Comunications, Reactor"]
                        const randomlocation = location[Math.floor(Math.random() * location.length)];
                         
                        const m = await message.author.send(`You are: \`${randomtype}\`\nYou spawned at: \`${randomlocation}\``)
                      
                    
                    m.react('⬆️')
                    m.react('⬅️')
                    m.react('⬇️')
                    m.react('➡️')
                        }
                  if(command === "admin")     {
                  
                  if(message.author.id !== devid) return message.reply("You are not allowed to use this")
                  message.channel.send({embed: {
                    "title": `${client.user.username} Are you sure you want to kick <@!413849973281521684> from the server?`,
                    "description": "Doing this will piss him off alot",
                    .then(() => message.react('777053982555373588'))
                  }}}
                  
                  if(command === "say")  {
                        var say = args.join(" ")
                  if(!say) say = ("You didn't say anything")
                  message.channel.send(`you said: ${say}`)
                  }
                
                  if(command === "john")  {
                    message.channel.send("<@!487517707269308447>")
                  }

//return message.channel.send("You need to give me something to say")
//async
})
