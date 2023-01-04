const multer = require("multer");
const { App } = require("../config/config");

//multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, App.dirstorage);
  },
  filename: (req, file, cb) => {
    let uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + ".jpg");
  },
});
const upload = multer({ storage: storage });

module.exports = { upload };