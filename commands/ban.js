const config = require('./../config'), discord = require('discord.js');
module.exports = {
    name: "ban",
    category: "ban",
    cooldown: 5,
    description: "Set Logs Channel!",
    aliases: ['bann', 'bon'],
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
            .setDescription(`I'm missing user input! Please provide a user, then I'll give them the banhammer`)
            .setFooter(config.embeds.footer + " - Made by Nutella#0008; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
            .setColor(config.embeds.errorcolor)
        let missingpermissions = new discord.MessageEmbed()
            .setTitle(`${config.emojis.error} | Missing Permissions`)
            .setDescription(`I'm missing permissions! Please give me more permissions/higher role to ban the member.`)
            .setFooter(config.embeds.footer + " - Made by Nutella#0008; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
            .setColor(config.embeds.errorcolor)
        if (!Member) return message.channel.send(missinguser)
        let reason = args.slice(1).join(" ");

        if (!reason) reason = 'Unspecified';
        if (!Member.banable) return message.channel.send(missingpermissions)
        Member.ban({ days: 7, reason: reason })
            .catch(err => {
                let embed = new discord.MessageEmbed()
                    .setTitle(`${config.emojis.error} | There went something wrong!`)
                    .setDescription('There was an error! Please retry to command, and check if I got permissions!')
                    .setColor(config.embeds.errorcolor)
                    .setFooter(config.embeds.footer + " - Made by Nutella#0008; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
                if (err) return message.channel.send(embed)
            })

        let banned = new discord.MessageEmbed()
            .setTitle(`${config.emojis.success} | Banned!`)
            .setDescription(`${Member.user.tag} got the banhammer! He's now banned.`)
            .addField('Reason:', reason)
            .addField('Moderator:', message.member.user.tag)
            .setFooter(config.embeds.footer + " - Made by Nutella; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
            .setColor(config.embeds.color)
        message.channel.send(banned)

    }
}