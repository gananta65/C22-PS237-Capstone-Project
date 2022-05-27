const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");
const User = require("../models/user");

exports.tokenVerification = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }

    User.findByPk(decoded.user.id).then((user) => {
      req.user = user;
      next();
    });
  });
};
