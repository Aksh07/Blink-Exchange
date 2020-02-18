const express = require("express");
const app = express();

// Importing the various routes

const pageRoutes = require("./pageRoutes");
app.use("/", pageRoutes);

// Starting the server
const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Listening at port ${port}...`);