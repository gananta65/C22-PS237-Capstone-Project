const Cloud = require("@google-cloud/storage");
const path = require("path");
const serviceKey = path.join(
  __dirname,
  "../my-first-project-10123213-9549fbf370c0.json"
);

const { Storage } = Cloud;
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: "my-first-project-10123213",
});

module.exports = storage;
