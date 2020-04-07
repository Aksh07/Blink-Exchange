const express = require("express");
const app = express();

//app.use(express.static(path.join(__dirname, 'client/build')));

// Importing the various routes

const getRoutes = require("./getRoutes.js");
const postRoutes = require("./postRoutes.js");
const deleteRoutes = require("./deleteRoutes.js");

app.use("/apis/get", getRoutes);
app.use("/apis/post", postRoutes);
app.use("/apis/delete", deleteRoutes);

/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});*/

// Starting the server

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Listening at port ${port}...`);
