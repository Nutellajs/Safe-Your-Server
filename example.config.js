module.exports = {
    /* Discord login services */
    token: "xxxxxxxxxx", // Here you have to do your discord token, you can find it on https://discord.com/developers
    activity: "xxxxxxxxxx", // for e.g "!help | I'm protecting your server"
    status: "xxxxxxxxxx", // This can be idle, dnd, online, and invisble. **Please understand, it has to be exact "idle", not "iDle". If you did something wrong it'll say online.
    prefix: "!", // The prefix the bot uses to respond to messages!
     /* Emoji's*/
    emojis: {
        success: "xxxxxxxxxx", // Here you can set up that 
        error: "xxxxxxxxxx", // The emoji if an error happend.
        online: "xxxxxxxxxx", // If something is online/working.
        loading: "xxxxxxxxxx", // If something is loading, such as meme.
        warn: "xxxxxxxxxx" // Warning emoji!
    },

    embeds: {
        color: "xxxxxxxxxx", // Embed color
        footer: "xxxxxxxxxx" // Footer content (Please understand, that there will be always a mark that Nutella made this.)
    },
    owner: {
        ownerid: "xxxxxxxxxx", // This will give the owner access to commands such as restart. 
        bypassslowmode: true // Owner can/can't bypass slowmode on commands (true = Yes, false = No.)
    },
    moderation: {
        silenced_moderation: true, // Will delete a message, after banning someone (so no one will see you're doing that.)
        message_on_action: true, // Will message the user if possible, for e.g if you ban him, it will send: "Your banned from: server, for: reason"
        
    }
}