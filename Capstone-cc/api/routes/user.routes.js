const user = require("../controllers/user.controller");
const { tokenVerification } = require("../middleware");
const router = require("express").Router();

module.exports = (app) => {
  router.get("/user", tokenVerification, user.getUser);
  router.put("/user/:userId", tokenVerification, user.updateUser);

  app.use("/api", router);
};
