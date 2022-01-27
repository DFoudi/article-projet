const express = require("express");
const router = express.Router();

const articleCtrl = require("../controllers/article");

// Les router dans l'url pour obtenir notre requete GET, POST ou DELETE
router.get("/", articleCtrl.getAllArticles);

router.post("/", articleCtrl.createArticle);

router.delete("/:id", articleCtrl.deleteArticle);
// Exporter pour que ca soit utilisé
module.exports = router;
