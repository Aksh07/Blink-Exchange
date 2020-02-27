const express = require("express");
const app = express();
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://kunalverma:kunalverma2017@cluster0-9flyf.mongodb.net/test?retryWrites=true&w=majority";

const router = express.Router();
const jsonParser = require("body-parser");

// Forcing request body to be parsed as JSON

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Add a new user

router.post("/users", (req, res) => {
  let newUser = req.body;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo.collection("users").insertOne(newUser, (err, queryResult) => {
      if (err) throw err;
      res.redirect("/");
    });
    db.close();
  });
});

// Add an item to the buy list

router.post("/buy", (req, res) => {
  let newBuyItem = req.body;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo.collection("buyItems").insertOne(newBuyItem, (err, queryResult) => {
      if (err) throw err;
      res.sendStatus(200);
    });
    db.close();
  });
});

// Add an item into the sell list

router.post("/sell", (req, res) => {
  let newSellItem = req.body;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo.collection("sellItems").insertOne(newSellItem, (err, queryResult) => {
      if (err) throw err;
      res.redirect("/");
    });
    db.close();
  });
});

module.exports = router;
