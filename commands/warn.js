const discord = require('discord.js'), config = require('./../config'), db = require('quick.db')
module.exports = {
    name: "warn",
    category: "config",
    cooldown: 5,
    description: "Set Logs Channel!",
    aliases: ['w', 'warm'],
    usage: "SetLogs <Mention Channel>",
	execute(message, args, client) {


    let missingpermissionws = new discord.MessageEmbed()
    .setTitle(`${config.emojis.error} | Missing Permissions`)
    .setDescription(`Your missing permissions! You need \`BAN_MEMBERS\` Permissions.`)
    .setFooter(config.embeds.footer + " - Made by Nutella#0008; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
    .setColor(config.embeds.errorcolor)
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(missingpermissionws)
    let Member = message.mentions.members.first()
    let missinguser = new discord.MessageEmbed()
    .setTitle(`${config.emojis.error} | Missing User`)
    .setDescription(`I'm missing user input! Please provide a user, then I'll give them the warn`)
    .setFooter(config.embeds.footer + " - Made by Nutella#0008; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
    .setColor(config.embeds.errorcolor)
    if(!Member) return message.channel.send(missinguser)
    let oldwarns = db.get(`Member_${Member.id}_warn`)
    if(oldwarns === null){
        oldwarns = 0
    }
        let newwarns = oldwarns+1
    db.set(`Member_${Member.id}_warn`, newwarns)
    let reason = args.slice(1).join(" ");

    if (!reason) reason = 'Unspecified';
    let banned = new discord.MessageEmbed()
    .setTitle(`${config.emojis.success} | Warned!`)
    .setDescription(`${Member.user.tag} got the warn! He's now warn for the ${newwarns} times.`)
    .addField('Reason:', reason)
    .addField('Moderator:', message.member.user.tag)
    .setFooter(config.embeds.footer + " - Made by Nutella; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
    .setColor(config.embeds.color)
    message.channel.send(banned)




}}