const Cloud = require("@google-cloud/storage");
const path = require("path");
const serviceKey = path.join(
  __dirname,
  "../capstone-project-c22-ps237-d29d2a084650.json"
);

const { Storage } = Cloud;
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: "capstone-project-c22-ps237",
});

module.exports = storage;
