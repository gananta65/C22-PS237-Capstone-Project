const Disease = require("../models/disease");

exports.getAllDiseases = (req, res) => {
  Disease.findAll({
    attributes: ["id", "user_id", "disease_name", "description", "image"],
    where: { user_id: req.user.id },
  })
    .then((data) => {
      res.send({ status: "success", data: data });
    })
    .catch((error) => {
      res.status(500).send({ status: error.message });
    });
};

exports.postDiseases = (req, res) => {
  const diseases_data = {
    user_id: req.user.id,
    disease_name: req.body.disease_name,
    description: req.body.description,
    image: req.body.image,
  };

  Disease.create(diseases_data)
    .then((data) => {
      res.send({ status: "success", data: data });
    })
    .catch((error) => {
      res.status(500).send({ status: error.message });
    });
};

exports.getDiseasesById = (req, res) => {
  Disease.findOne({
    attributes: ["id", "user_id", "disease_name", "description", "image"],
    where: { id: req.params.diseaseId },
  })
    .then((data) => {
      res.send({ status: "success", data: data });
    })
    .catch((error) => {
      res.status(404).send({ status: error.message });
    });
};
