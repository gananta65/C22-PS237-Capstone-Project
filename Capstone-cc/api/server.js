const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/");
const multer = require("multer");

const app = express();

const processFile = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(processFile.single("file"));

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require("./routes/auth.routes")(app);
require("./routes/article.routes")(app);
require("./routes/disease.routes")(app);
require("./routes/user.routes")(app);

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});
