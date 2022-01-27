// Framework Express.Js afin de pouvoir consommer et faire des requêtes Http et créer un server

const http = require('http');

// Le projet démarre par le server.js il créait le server sur le port 4000 et il lance le app.js sur le port 4000. On dit que le fichier app.js c'est le fichier de démarrage et il est stocké dans une constante du même nom
const app = require('./app');

// Si le port n'existe pas alors j'utilise le port 3000 mais si le port 3000 est utilisé alors je créais un port comme dans le fichier .env et j'ai choisi le port 4000
// Côté front on fait les requête Http sur 4000 pour envoyer au navigateur et les afficher 

const port = process.env.PORT || '3000';

//une fois que la connection au serveur et la base de données est réussi alors app.js qui est le point de démarrage est lancé sur le port choisi soit automatiquement si il est libre soit par le port selectionné dans .env
app.set('port', port);

//Je créais mon server
const server = http.createServer(app);

// Si la connexion est réussi alors on affiche et précise dans la console que le port est écouté. A savoir le port 4000 grâce à la modification du port dans le fichier .env
server.on('listening', () => {
  console.log('Listening on ' + port);
});

server.listen(port);
