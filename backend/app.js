// Utilisation de Express.Js pour le server
const express = require('express');
// Utilisation de Mongoose pour la connection à la bdd 
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// importation de routes/article
const articleRoutes = require('./routes/article');

const app = express();

// Partie connection à la bdd:
// Ici on a utilisé Mangoose qui est l'ORM de MongoDb afin de pouvoir manipulé les données en CRUD par exemple. 
// Soit j'installe MongoDb en locale et je consomme les données localement ou bien j'utilise une alternative et jecréais une bdd en ligne et je peux accéder ou bien créer les données en ligne. Puis j'ajoute les accès avec le DB_NAME et le DB_PASSWORD qui va me permettre de me connecter à la bdd en ligne, avec MongoDb Atlas qui permet le déploiement de bdd grâce à se service offert par MongoDb en ligne afin de ne rien téléchargé et ne pas utiliser en local. Ce lien proposé sur le site permet la connection du service en ligne à l'application en ajoutant le login et mot de passe du compte. Voici le lien d'origine:
// mongodb+srv://articles2022:<password>@cluster0.hjxta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.hjxta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  // Un message de réussite si la connection à la bdd MongoDb est réussie
  .then(() => console.log('Connexion à MongoDB réussie !'))
  // un message d'erreur dans le cas contraire
  .catch((error) => console.log('Connexion à MongoDB échouée !', error));

  // Quand le front envoi une requete Http le server transforme les données en format Json 
app.use(express.json());
//C'est une sécurité si tu te connecte sur un port non connu il détecte qu'il est étranger et que j'ai pas l'accès
app.use(cors());

// on créait des requêtes Http à partir de cette route là pour récupérer nos données ou bien pour autre chose selon la requête Http si c'est GET, PUT, POST, DELETE ect... :
app.use('/api/articles', articleRoutes);
// Exporter pour que ca soit fonctionnel
module.exports = app;
