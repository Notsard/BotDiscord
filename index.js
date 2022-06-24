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


const   notsard = require('./Features/Administratives/embed')

let     serversNumber;
let     serversName = [];
        
async function getServers() {
    let serversArray = client.guilds.array();
    serversNumber = serversArray.length;
    serversName = serversArray.join().replace(',','\n\r- ');
}


client.on('ready', async function(){
    clear();

    /* await getServers(); */

    console.log(`
        \rBot Connecté avec succès ! 
        \n
        \rNom de votre bot : ${client.user.username},
        \rNombre de serveurs : ${serversNumber},
        \rListe des serveurs :
        \r- ${serversName}
        \n` 
        ,`\rDéveloppé par : Notsard#1080`.green.bold);

    client.user.setActivity(botStatus)
    

});

client.on('message', message => {
    // If the message is '!rip'
    if (message.content === 'rip') {
      // Create the attachment using MessageAttachment
      /* const attachment = new Discord.Attachment('https://i.imgur.com/w3duR07.png'); */
      // Send the attachment in the message channel
      message.channel.send('https://i.imgur.com/w3duR07.png');
    }
  });

  client.on('message', async message => {
    if (message.content.startsWith('Mon Avatar ?')) {
        message.reply(message.author.displayAvatarURL())
        .then(() => console.log(`Replied to message "${message.content}"`))
        .catch(console.error);
    }
  });

  
  client.on('message', embed => {
    notsard.notsard(embed)
});

client.login(token);