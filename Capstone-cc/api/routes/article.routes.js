const article = require("../controllers/article.controller");
const { tokenVerification } = require("../middleware");
const router = require("express").Router();

module.exports = (app) => {
  router.get("/article", tokenVerification, article.getArticles);
  router.get("/article/:id", tokenVerification, article.getOne);

  app.use("/api", router);
};
