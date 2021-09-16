const { Client, Attachment ,Discord } = require('discord.js')
const client = new Client()
require("dotenv").config()

const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async msg => {
  console.log(msg.content);

  if (msg.content === ":questions") {
    let jour = "";

    if(msg.member.roles.cache.find(role => role.name === 'MJ')) {
      for (jour of jours) {
        msg.channel.send(jour + " 14h").then(function (message) {
          message.react("👌")
          message.react("😬")
          message.react("🤔")
          message.react("😱")
        }).catch(function() {
          //Something
        });

        msg.channel.send(jour + " 20h").then(function (message) {
          message.react("👌")
          message.react("😬")
          message.react("🤔")
          message.react("😱")
        }).catch(function() {
          //Something
        });
      }
    }

    
  }
})



client.login(process.env.token)