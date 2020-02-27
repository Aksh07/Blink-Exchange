const express = require("express");
const app = express();
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://kunalverma:kunalverma2017@cluster0-9flyf.mongodb.net/test?retryWrites=true&w=majority";
const router = express.Router();
const jsonParser = require("body-parser");

// Remove a user

router.delete("/users/:id", (req, res) => {
  const removeUser = req.params.id;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("users")
      .deleteOne({ username: removeUser }, (err, queryResult) => {
        if (err) throw err;
        res.send(`User ${removeUser} successfully deleted`);
      });
    db.close();
  });
});

// Remove an item from the buy list

router.delete("/buy/:id", (req, res) => {
  const id = req.params.id;
  const removeBuyItem = mongodb.ObjectId(id);
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("buyItems")
      .deleteOne({ _id: removeBuyItem }, (err, queryResult) => {
        if (err) throw err;
        res.send(`Item ${id} successfully deleted  from the buy list`);
      });
    db.close();
  });
});

// Remove an item from the sell list

router.delete("/sell/:id", (req, res) => {
  const id = req.params.id;
  const removeSellItem = mongodb.ObjectId(id);
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("sellItems")
      .deleteOne({ _id: removeSellItem }, (err, queryResult) => {
        if (err) throw err;
        res.send(`Item ${id} successfully deleted from the sell list`);
      });
    db.close();
  });
});

module.exports = router;
