const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => {
    console.log('Bot is ready!')
})

client.on('message', message => {
    if(message.content === 'hello') {
        message.channel.send('Hi!')
    }
})

client.on('message', message => {
    if(message.content === 'help') {
        message.channel.send('Help\n\nFun Commands\n\nhello\n\nstuff')
    }
})

client.login('ODc3NjI5MDkxNzA3MjMyMzA2.YR1ZyQ.xcwgxVIvBCmUPE4I37k15sgkQ2g')