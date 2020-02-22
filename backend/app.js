const express = require("express");
const app = express();

// Importing the various routes

const pageRoutes = require("./pageRoutes");
const getRoutes = require("./getRoutes.js");
const postRoutes = require("./postRoutes.js");
const deleteRoutes = require("./deleteRoutes.js");

app.use("/", pageRoutes);
app.use("/apis/get", getRoutes);
app.use("/apis/post", postRoutes);
app.use("/apis/delete", deleteRoutes);

// Starting the server

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Listening at port ${port}...`);