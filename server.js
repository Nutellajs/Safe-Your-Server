const fs = require('fs');
let config = require('./config');
fs.readFile('./config.js', err =>{
    if(err) console.log('Please make a "config.js", file and fill it in, after you\'ve done that please try to start it again!').then(process.exit())
})

const discord = require('discord.js'), Discord = require('discord.js');
const { embeds } = require('./example.config');
const client = new discord.Client();

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.login(config.token)

client.on('ready', () =>{
    client.user.setStatus(config.status)
    client.user.setActivity(config.activity)
    console.log(`[READY] Your bot (${client.user.tag}) is now online! To use it; please use ${config.prefix}help to see all commands!`)
})

let prefix = config.prefix;

client.on('message', message => {
  
	if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if(!commandName) return;
  if (!cooldowns.has(commandName)) {
    cooldowns.set(commandName, new Discord.Collection());
  }
  if(!command) return;
  const now = Date.now();
  const timestamps = cooldowns.get(commandName);
  const cooldownAmount = (commandName.cooldown || 3) * 1000;
      if (timestamps.has(message.author.id)) {
        if(!(message.author.id === config.owner.ownerid && config.owner.bypassslowmode === true)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
  
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      let embed = new discord.MessageEmbed()
      .setTitle(`${config.emojis.warn} | Your on cooldown!`)
      .setDescription(`Please wait ${timeLeft.toFixed(1)} more seconds before using **${commandName}** again!`)
      .setColor(config.embeds.errorcolor)
      .setFooter(config.embeds.footer + "- Made by Nutella; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
      return message.channel.send(embed);
    }
  }}
  
  
  command.execute(message, args, client);
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
});



// Error Embed = 

/* let embed = new discord.MessageEmbed()
    .setTitle(`${config.emojis.error} | There went something wrong!`)
    .setDescription('There was an error! Please retry to command, and check if I got permissions!')
    .setColor(config.emojis.error)
    .setFooter(config.embeds.footer + "- Made by Nutella; Github: https://github.com/EmptyBotDev/Safe-Your-Server")
    */
