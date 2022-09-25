const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, `${__approot}/uploads/`);
  },
  filename: (req, file, callBack) => {
    callBack(null, Date.now() + "-" + file.originalname);
  },
});

// allow only csv files
const csvFileFilter =(req, file, callBack) => {

  if (file.mimetype.includes("csv")) {
      callBack(null, true);
  } else {
      callBack("Only csv files can be uploaded", false);
  }
};

const upload = multer({ storage: fileStorageEngine, fileFilter: csvFileFilter });

module.exports = upload;
