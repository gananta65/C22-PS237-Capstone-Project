const user = require("../controllers/user.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.get();
  router.put();

  app.use("/api", router);
};
