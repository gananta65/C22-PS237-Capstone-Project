const db = require("../models");

const Article = db.Article;

exports.getArticles = (req, res) => {
  Article.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({ status: error.message });
    });
};

exports.getOne = (req, res) => {
  const id = req.params.id;

  Article.findOne({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(404).send({ status: error.message || "Article not found" });
    });
};
