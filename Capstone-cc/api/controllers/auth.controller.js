const User = require("../models/").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");
const { Op } = require("sequelize");

exports.register = async (req, res) => {
  try {
    if (
      !req.body.email ||
      !req.body.username ||
      !req.body.password ||
      !req.body.name
    ) {
      return res.status(500).send({
        message: "Please fill all forms",
      });
    }

    const checkEmailUsername = await User.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }, { username: req.body.username }],
      },
    });

    if (checkEmailUsername) {
      res.status(400).send({
        message: "Email or username is already been taken",
      });
    }

    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 11),
      name: req.body.name,
    };

    await User.create(userData);

    return res
      .status(200)
      .send({ status: "success", message: "User has been created" });
  } catch (error) {
    return res.status(500).send({ status: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const match = bcrypt.compareSync(password, user.password);

    if (!match) {
      return res.status(401).send({
        message: "Password is incorrect",
      });
    }

    const token = jwt.sign({ user: user }, authConfig.secret, {
      expiresIn: authConfig.expires,
    });

    res.send({
      status: "success",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        image: user.image,
        token: token,
      },
    });
  } catch (error) {
    return res.status(500).send({ status: error.message });
  }
};
