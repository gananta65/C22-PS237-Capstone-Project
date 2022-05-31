const { format } = require("util");
const gcConfig = require("../config/storage.config");
const gcBucket = gcConfig.bucket("image_upload_test333");

exports.uploadImage = (file) =>
  new Promise((resolve, reject) => {
    const { originalname, buffer } = file;

    const blob = gcBucket.file(originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on("finish", () => {
      const publicUrl = format(
        `https://storage.googleapis.com/${gcBucket.name}/${blob.name}`
      );
      resolve(publicUrl);
    });

    blobStream.on("error", () => {
      reject(`Can't upload file, try again`);
    });

    blobStream.end(buffer);
  });
