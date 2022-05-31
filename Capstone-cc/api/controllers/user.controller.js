const User = require("../models/").User;
const { uploadImage } = require("./upload.controller");

exports.getUser = async (req, res) => {
  try {
    const data = await User.findOne({
      attributes: ["id", "name", "email", "username", "image"],
      where: { id: req.user.id },
    });
    return res.status(200).send({ status: "success", data: data });
  } catch (error) {
    return res.status(404).send({ status: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    let imageUrl;

    if (req.file) {
      const image = req.file;
      imageUrl = await uploadImage(image);
    }

    const user_data = {
      name: req.body.name ?? req.user.name,
      email: req.body.email ?? req.user.email,
      username: req.body.username ?? req.user.username,
      image: imageUrl ?? req.user.image,
    };

    await User.update(user_data, {
      where: { id: req.user.id },
    });

    return res
      .status(200)
      .send({ status: "success", message: "User has been updated" });
  } catch (error) {
    return res.status(500).send({ status: error });
  }
};
