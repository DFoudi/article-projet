const Article = require('../models/Article');

// Création d'un article
exports.createArticle = async (req, res) => {
  try {
    await Article.create(req.body);
    res.status(201).json({ message: 'Article enregistrée !' })
  } catch (error) {
      res.status(400).json({ error })
    }
};

// Affichage liste des articles
exports.getAllArticles = async (req, res) => {
    try {
      const articles = await Article.find();
      res.status(200).json(articles)
    } catch(error) {
        res.status(400).json({ error })
    }
};

// Suppression d'un article

// Pour supprimer un article il recherche l'id selectionner dans l'url avec findOne(), si il n'y a pas d'article alors on envoi un message d'erreur sinon il envoi un status(200) et on supprime avec un message de réussite
exports.deleteArticle = async (req, res) => {
    try {
      const article = await Article.findOne({ _id: req.params.id });
      if (!article) {
        res.status(404).json({
          error: new Error("Cette article n'existe pas"),
        });
      } else {
        await Article.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'Article supprimée' });
      }
    } catch(error) {
        res.status(400).json({ error })
      }
};
