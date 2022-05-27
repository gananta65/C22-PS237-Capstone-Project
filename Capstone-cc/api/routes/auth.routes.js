const auth = require("../controllers/auth.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.post("/auth/register", auth.register);
  router.post("/auth/login", auth.login);

  app.use("/api", router);
};
