const Disease = require("../models/").Disease;
const { uploadImage } = require("./upload.controller");

exports.getAllDiseases = async (req, res) => {
  try {
    const data = await Disease.findAll({
      attributes: ["id", "user_id", "disease_name", "description", "image"],
      where: { user_id: req.user.id },
    });
    return res.status(200).send({ status: "Success", data: data });
  } catch (error) {
    return res.status(500).send({ status: error.message });
  }
};

exports.postDiseases = async (req, res) => {
  try {
    const myFile = req.file;
    const imageUrl = await uploadImage(myFile);

    const diseases_data = {
      user_id: req.user.id,
      disease_name: req.body.disease_name,
      description: req.body.description,
      image: imageUrl,
    };

    await Disease.create(diseases_data);

    return res.status(200).send({
      message: "Success",
      data: diseases_data,
    });
  } catch (error) {
    return res.status(500).send({ status: error.message });
  }
};

exports.getDiseasesById = async (req, res) => {
  try {
    const data = await Disease.findOne({
      attributes: ["id", "user_id", "disease_name", "description", "image"],
      where: { id: req.params.diseaseId },
    });
    return res.status(200).send({ status: "success", data: data });
  } catch (error) {
    return res.status(404).send({ status: error.message });
  }
};
