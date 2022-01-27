// Utilisation de Mongoose pour la connection à la bdd 
const mongoose = require('mongoose');

// Ici on définit les champs de notre article qui seront les mêmes que dans la bdd
// On précise que les champs name et description sont des champs necessaire car = required: true alors imageUrl non puis on prend la date du jour de la création de l'article
const articleSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: false },
  date: { type: Date, default: Date.now },
});
// Export pour l'utilisation création de ce modèle à la bdd
module.exports = mongoose.model('Article', articleSchema);
