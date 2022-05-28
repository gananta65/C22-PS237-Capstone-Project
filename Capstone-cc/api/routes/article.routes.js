module.exports = (app) => {
  const article = require("../controllers/article.controller");

  const router = require("express").Router();

  router.get("/", article.getArticles);

  router.get("/:id", article.getOne);

  app.use("/api/article", router);
};
