const disease = require("../controllers/disease.controller");
const { tokenVerification } = require("../middleware");
const router = require("express").Router();

module.exports = (app) => {
  router.post("/disease", tokenVerification, disease.postDiseases);
  router.get("/disease", tokenVerification, disease.getAllDiseases);
  router.get("/disease/:diseaseId", tokenVerification, disease.getDiseasesById);

  app.use("/api", router);
};
