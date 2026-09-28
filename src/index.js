const express = require("express");
require("dotenv").config();
const DB_NAME=require("./constants.js")

const connectDB = require("./db");

const app = express();

app.use(express.json());

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("Database connection failed:", err);
    });