module.exports = (app) => {
  const user = require("../controllers/user.controller");

  const router = require("express").Router();

  router.post("/register", user.register);

  router.get("/login", user.login);

  router.get("/profile/:id", user.getProfile);

  router.put("/update", user.update);

  app.use("/api/user", router);
};
