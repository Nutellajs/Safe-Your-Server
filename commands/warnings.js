const discord = require('discord.js'), config = require('./../config'), db = require('quick.db')
module.exports = {
    name: "warnings",
    category: "config",
    cooldown: 5,
    description: "Set Logs Channel!",
    aliases: ['warns','warmings', 'warms'],
    usage: "SetLogs <Mention Channel>",
	execute(message, args, client) {
        const Member = message.mentions.members.first() || message.member
        
        let oldwarns = db.get(`Member_${Member.id}_warn`)
        if(oldwarns === null){
            oldwarns = 0
        }
    
        let warnings = new discord.MessageEmbed()
        .setTitle(`Warnings of ${Member.user.tag}`)
        .addField('Warnings:', oldwarns)
        .setFooter(config.embeds.footer + " - Made by Nutella; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
        .setColor(config.embeds.color)
        message.channel.send(warnings)
    }}