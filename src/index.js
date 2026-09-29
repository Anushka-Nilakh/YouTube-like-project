const express = require("express");
require("dotenv").config();
const DB_NAME=require("./constants.js")
const app=require("./app.js")

const connectDB = require("./db");


connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("Database connection failed:", err);
    });