const discord = require('discord.js');
const config = require('./../config')
module.exports = {
    name: "help",
    category: "config",
    cooldown: 5,
    description: "Set Logs Channel!",
    aliases: ['m', 'silence'],
    usage: "SetLogs <Mention Channel>",
	execute(message, args, client) {
        let p = config.prefix;
        let helpemb = new discord.MessageEmbed()
        .setTitle('Help!')
        .setDescription(`
        {} = Required 
        <> = Optional
        
        **Moderation**:
        \`${p}ban {user} <reason>\`, \`${p}kick {user} <reason>\`, \`${p}purge {amount}\`. 

        **Fun**:
        \`${p}meme\`, \`${p}whois <user>\`, \`${p}say {text}\`, \`${p}dog\`.
        
        **Administration**:
        \`${p}warn {user} {reason}\`, \`${p}warnings <user>\`
        `)
        .setFooter(config.embeds.footer + " - Made by Nutella#0008; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setColor(config.embeds.color)
        message.channel.send(helpemb)
    }}