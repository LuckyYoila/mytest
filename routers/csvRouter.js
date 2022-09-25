const express = require("express");
const router = express.Router();

// middleware
fileStorageMiddleware = require("../middleware/fileStorageMiddleware");

// route
router.post(
  "/",
  fileStorageMiddleware.single("file"),
  require("../controllers/csvController")
);

module.exports = router;
