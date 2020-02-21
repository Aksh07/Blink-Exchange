const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kunalverma:kunalverma2017@cluster0-9flyf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


// Importing the various routes

const pageRoutes = require("./pageRoutes");
const getRoutes = require("./getRoutes.js");

app.use("/", pageRoutes);
app.use("/apis/get", getRoutes);

// Starting the server
const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Listening at port ${port}...`);