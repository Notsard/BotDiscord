require('dotenv').config({
    path: 'config/.env'
});

/**
 * Dépendances du bot
 */
const   Discord = require('discord.js'),
        clear = require('clear'),
        client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }),
        colors = require('colors');

const   token = process.env.BOT_TOKEN,
        botStatus = process.env.BOT_STATUS

/* async function getServers() {
        let serversArray = client.guilds.array();
        serversNumber = serversArray.length;
        serversName = serversArray.join().replace(',','\n\r- ');
        } */

client.on('ready', async function(){
    clear();

    /* await getServers(); */

    console.log(/*`
        \rBot Connecté avec succès ! 
        \n
        \rNom de votre bot : ${client.user.username},
        \rNombre de serveurs : ${serversNumber},
        \rListe des serveurs :
        \r- ${serversName}
        \n
    ` green.bold+`\rDéveloppé par : Notsard#1080`.yellow.bold); */)

    client.user.setActivity(botStatus)
    

});

client.login(token);