const { Client, Collection, Intents } = require('discord.js');
const client = new Client({
    shards: "auto",
    allowedMentions: { parse: ["users"], repliedUser: false },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, 
        Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, 
        Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING 
    ]
});
const { readdirSync } = require('fs');
const db = require('quick.db')
//const { keep_alive } = require("./keep_alive");
const Timeout = new Collection()
const { token } = require("./config.json")



client.queue = new Map();
client.commands = new Collection();
client.aliases = new Collection();
client.categoryes = readdirSync("./commands/")
const settups = require('./handlers/setups.js');
settups(client);


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.on("messageCreate", async message => {
    if (message.author.bot) return;
    const prefix = 'Rb'
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);

})

client.on("messageCreate", async message => {
    if (message.author.bot) return;
    const prefix = 'rb'
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);

})

client.login(token);
