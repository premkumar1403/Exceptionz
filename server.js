const express = require("express");
const app = express();
const MongoDB = require("./config/db.config")
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();
const contactRouter = require("./router/exceptionz");

app.use(cors());

MongoDB(); 

app.use(express.json());


app.use("/api/v1/exceptionz", contactRouter);

app.listen( process.env.PORT || 5001, () => {
    console.log("server is running on port number:", process.env.PORT || 5001);
})   