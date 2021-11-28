const { Client, Intents } = require('discord.js');
const { token, sql_host, sql_user, sql_pass, sql_db } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const mysql = require("mysql");

const con = mysql.createConnection
({
	host: sql_host,
	user: sql_user,
	password: sql_pass,
	database: sql_db;
});

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
        } else
            console.log(`${message.author.tag} issued command: ${message.content}`);
    }
});

function updateLink(discord_id, username, code)
{
	con.connect(function(err)
	{
  		if (err) throw err;
		console.log("Connected!");
	});

	var queryStr = "INSERT INTO dc_verify (discord_id, username, code) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE code = ?";
	var query = connection.query(queryStr, [discord_id, username, code], function(err, results)
   	{
       	if (err) throw err;
		console.log(`Discord link updated for ${discord_id}, code: ${code}`);
   	});
}

function lwstrcmp(var1, var2)
{
    return var1.toLowerCase() == var2.toLowerCase();
}

client.login(token);
