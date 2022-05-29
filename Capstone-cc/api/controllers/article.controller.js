const Article = require("../models").Article;

exports.getArticles = async (req, res) => {
  try {
    const data = await Article.findAll();
    return res.status(200).send({ status: "Success", data: data });
  } catch (error) {
    return res.status(500).send({ status: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Article.findOne({ where: { id: id } });

    return res.status(200).send({ status: "Success", data: data });
  } catch (error) {
    return res.status(500).send({ status: error.message });
  }
};
