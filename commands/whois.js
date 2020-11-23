const discord = require('discord.js'), config = require('./../config'), db = require('quick.db'), ms = require('ms')
module.exports = {
    name: "whois",
    category: "config",
    cooldown: 5,
    description: "Set Logs Channel!",
    aliases: ['whois', 'userinfo'],
    usage: "SetLogs <Mention Channel>",
	execute(message, args, client) {
    
        let memb = message.mentions.members.first() || message.member;
     
        let status = memb.lastMessage.content
        if(status === null){
            status = "I couldn't find out..."
        }
        let emb = new discord.MessageEmbed()
        .setTitle('Whois?')
        .addField('User:', memb.user.tag, true)
        .addField('Mention:', memb,true)
        .addField('Discriminator:', `#${memb.user.discriminator}`,true)
        .addField('Joined the server at:', memb.joinedAt, true)
        .addField('On discord since:', memb.user.createdAt, true)
        .addField('Current Status:', memb.presence.status, true)
        .addField('Playing:',  memb.presence.activities|| "Nothing", true)
        .addField('Last message content:', status)
        .setFooter(config.embeds.footer)
        .setColor(config.embeds.color)
        message.channel.send(emb)

}}