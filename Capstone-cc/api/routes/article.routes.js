const article = require("../controllers/article.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.get("/articles", article.getArticles);
  router.get("/article/:id", article.getOne);

  app.use("/api", router);
};
