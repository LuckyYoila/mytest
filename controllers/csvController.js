const asyncHandler = require("express-async-handler");
const csvParser = require("csv-parser");
const fs = require("fs");
const getRankedData = require("../helpers/getRankedData")


let fileData = [];

const sortCSV =  asyncHandler( async (req, res) => {
  try {

    if (!req.file) {
      res.status(400).json({ message: "please upload a csv file" });
      return
    }

    // get file
    let uploadedFile = `${__approot}/uploads/${req.file?.filename}`;

    // parse uploadedFile
     fs.createReadStream(uploadedFile)
      .pipe(csvParser({}))
      .on("data", (data) => fileData.push(data))
      .on("end", () => {
        const rankedData = getRankedData(fileData)

        res.status(200).json({ message: "csv successfuly sorted", data: rankedData });
      })

  } catch (error) {
    console.log(error);
    res.json({message:"an error occurred"})
  }
});


module.exports = sortCSV;
