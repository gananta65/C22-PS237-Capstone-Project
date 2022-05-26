module.exports = (app) => {
  const article = require("../controllers/article.controller");

  const router = require("express").Router();

  router.get("/all", article.getArticles);

  app.use("/api/article", router);
};
