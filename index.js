const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

client.once('ready', () =>
{
	console.log('Ready!');
});

client.on('messageCreate', message =>
{
    var args = message.content.split(" ");
    if (message.content.toLowerCase().startsWith("!link"))
    {
        if (args == null || args[1] == null || args[1] == "")
        {
            message.reply("Invalid arguments. Usage: `!link USERNAME`").catch(console.error);
            return;
        }
    }
});

function lwstrcmp(var1, var2)
{
    return var1.toLowerCase() == var2.toLowerCase();
}

client.login(token);
