/**
 * Les fonctions prendront en paramètres :
 * - botInstance : L'instance du bot
 * - member : l'objet user du membre qui a rejoind / quitté
 * - WellcomeChannel / GoodbyeChannel : Le Channel textuel où sera annoncé l'arrivée ou le départ d'un membre 
 */

 require('dotenv').config({
    path: 'config/.env'
});

const   embed = {
    "title": "Notsard",
    "description": "Voici sa chaine twitch ([Twitch](https://www.twitch.tv/mrnotsard))",
    "color": 642720,
    "footer": {
      "icon_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/a22cd2c3-436d-4344-9a88-2023811516d4-profile_image-70x70.png",
      "text": "NotBot"
    },
    "thumbnail": {
      "url": "https://static-cdn.jtvnw.net/jtv_user_pictures/a22cd2c3-436d-4344-9a88-2023811516d4-profile_image-70x70.png"
    },
    "image": {
      "url": "https://static-cdn.jtvnw.net/jtv_user_pictures/a22cd2c3-436d-4344-9a88-2023811516d4-profile_image-300x300.png"
    },
    "author": {
      "name": "Notsard",
      "url": "https://discordapp.com",
      "icon_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/a22cd2c3-436d-4344-9a88-2023811516d4-profile_image-70x70.png"
    },
    "fields": [
      {
        "name": "🤔 Pourquoi Dois-Je Allez Me Follow A La Chaine De Notsard",
        "value": "Car Il Est Sympa, Drole, Il Fait Passer Le Temps Et Il est Cool"
      },
      {
        "name": "😱 Mais Notsard C'est Un BG ?",
        "value": "Encore Plus Quand Il Aura Les Cheuveux Jaunes!"
      },
      {
        "name": "🙄 Que Fait Il Pendant Ses Streams",
        "value": "Il Joue A : Minecraft, Apex, Et Bien D'Autre Jeux"
      }
    ]
  };

module.exports = {
    notsard: ('message', message => {
        // If the message is "what is my avatar"
        if (message.content === 'Qui est Notsard ?') {
          // Send the user's avatar URL
          message.delete();
          message.reply({embed})
        }
      })
        }
