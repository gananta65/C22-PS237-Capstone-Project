const User = require("../models/").User;
const bcrypt = require("bcrypt");
const user = require("../models/user");
const { uploadImage } = require("./upload.controller");

exports.getUser = async (req, res) => {
  try {
    const data = await User.findOne({
      attributes: ["id", "name", "email", "username", "image"],
      where: { id: req.params.userId },
    });
    return res.status(200).send({ status: "success", data: data });
  } catch (error) {
    return res.status(404).send({ status: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const myFile = req.file;
    const imageUrl = await uploadImage(myFile);
    /* Delete Image
    
    
    */
    const user_data = {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 11),
      image: imageUrl,
    };
    await User.update(
      {
        name: user_data.name,
        email: user_data.email,
        username: user_data.username,
        password: user_data.password,
        image: user_data.image,
      },
      {
        where: { id: req.params.userId },
      }
    );

    return res.status(200).send({
      message: "Success",
      data: user_data,
    });
  } catch (error) {
    return res.status(500).send({ status: error.message });
  }
};
