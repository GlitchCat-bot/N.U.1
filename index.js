const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = "!!";
client.on("ready", message => {
    console.log("Nano Is Here");
    
});


client.on("message"; message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
})

client.login("NzgxMTgzMzE1NTA3MjgxOTUz.X757qA.DflWSPJ1yuUyKg829SQiK4XsP5s")