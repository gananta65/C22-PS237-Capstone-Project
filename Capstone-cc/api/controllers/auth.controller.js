const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");

exports.register = (req, res) => {
  if (
    !req.body.email ||
    !req.body.username ||
    !req.body.password ||
    !req.body.name
  ) {
    res.status(500).send({
      message: "Please fill all forms",
    });
    return;
  }

  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Email is already been taken",
      });
      return;
    }
  });

  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Username is already been taken",
      });
      return;
    }
  });

  const user_data = {
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 11),
    name: req.body.name,
  };

  User.create(user_data)
    .then((data) => {
      res.send({ status: "success", message: "User has been created" });
    })
    .catch((error) => {
      res.status(500).send({ status: error.message });
    });
};

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    where: {
      username: username,
    },
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "User not found" });
      }

      const match = bcrypt.compareSync(password, data.password);

      if (!match) {
        return res.status(401).send({
          message: "Password is incorrect",
        });
      }

      const token = jwt.sign({ user: data }, authConfig.secret, {
        expiresIn: authConfig.expires,
      });

      res.send({
        status: "success",
        data: {
          id: data.id,
          name: data.name,
          email: data.email,
          username: data.username,
          image: data.image,
          token: token,
        },
      });
    })
    .catch((error) => {
      res.status(500).send({ status: error.message });
    });
};
