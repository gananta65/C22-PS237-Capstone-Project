const db = require("../models");
const bcrypt = require("bcrypt");
const User = db.User;
const Op = db.Sequelize.Op;

exports.register = (req, res) => {
  if (
    !req.body.email ||
    !req.body.username ||
    !req.body.password ||
    !req.body.name ||
    !req.body.image
  ) {
    res.status(500).send({
      message: "Please fill all forms",
    });
    return;
  }

  const user_data = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    image: req.body.image,
  };

  User.create(user_data)
    .then((data) => {
      res.send({ status: "success", data: data });
    })
    .catch((error) => {
      res.status(500).send({ status: error.message });
    });
};

exports.login = (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  User.findOne({
    where: {
      [Op.and]: [{ username: username }, { password: password }],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(404).send({ status: error.message || "User not found" });
    });
};
exports.getProfile = (req, res) => {
  const id = req.params.id;
  User.findOne({ where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(404).send({ status: error.message || "User not found" });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User profile was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update user profile with id ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating user profile, try again later",
      });
    });
};
