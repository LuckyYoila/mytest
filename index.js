const express = require('express');
const dotenv = require('dotenv').config();

//set app root
global.__approot = __dirname

app = express();

// middleware
app.use(express.json())

// routers
app.get("/", (req, res)=> {
    res.status(200).json({message: "server running"})
})
app.use("/sortcsv", require('./routers/csvRouter'))


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App running on port: ${port}`))