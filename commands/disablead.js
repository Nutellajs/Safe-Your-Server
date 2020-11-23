const db = require('quick.db'), discord = require('discord.js'), config = require('./../config')
module.exports = {
    name: "enable",
    category: "config",
    cooldown: 5,
    description: "Set Logs Channel!",
    aliases: ['disable', 'silence'],
    usage: "SetLogs <Mention Channel>",
	execute(message, args, client) {

        let currentstate = db.get(`Anti-Ad`)
        if(currentstate === null){
            currentstate = false
        }

        if(currentstate === false){
            db.set(`Anti-Ad`, true)
            let emb = new discord.MessageEmbed()
            .setTitle(`${config.emojis.warn} | Anti-Ad is now enabled!`)
            .setDescription('Every invite that will be send, by a user without permissions will get deleted!')
            .setColor(config.embeds.color)
            .setFooter(config.embeds.footer + " - Made by Nutella; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
            message.channel.send(emb)
        }
        if(currentstate === true){
            db.set(`Anti-Ad`, false)
            let emb = new discord.MessageEmbed()
            .setTitle(`${config.emojis.warn} | Anti-Ad is now disabled!`)
            .setDescription('Every invite that will be send, by a user without permissions won\'t get deleted!')
            .setColor(config.embeds.color)
            .setFooter(config.embeds.footer + " - Made by Nutella; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
            message.channel.send(emb)
        }
    }}