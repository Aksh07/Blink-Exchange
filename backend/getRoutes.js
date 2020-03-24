const express = require("express");
const app = express();
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://kunalverma:kunalverma2017@cluster0-9flyf.mongodb.net/test?retryWrites=true&w=majority";
const router = express.Router();

// Search for a user

router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo.collection("users").findOne({ username: id }, (err, queryResult) => {
      if (err) throw err;
      res.json(queryResult);
    });
    db.close();
  });
});

// Get all items from the buy list, in descending order of date

router.get("/buy", (req, res) => {
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("buyItems")
      .find()
      .sort({ postDate: -1 })
      .toArray((err, queryResult) => {
        if (err) throw err;
        res.json(queryResult);
      });
    db.close();
  });
});

router.get("/buy:name", (req, res) => {
  const name = req.param.name;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("buyItems")
      .find({ productName: name })
      .sort({ postDate: -1 })
      .toArray((err, queryResult) => {
        if (err) throw err;
        res.json(queryResult);
      });
    db.close();
  });
});

// Get all items from the sell list, in descending order of date

router.get("/sell", (req, res) => {
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("sellItems")
      .find()
      .sort({ postDate: -1 })
      .toArray((err, queryResult) => {
        if (err) throw err;
        res.json(queryResult);
      });
    db.close();
  });
});

// Search for an item in the buy list

router.get("/buy/:id", (req, res) => {
  const id = req.params.id;
  const findObject = mongodb.ObjectId(id);
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("buyItems")
      .findOne({ _id: findObject }, (err, queryResult) => {
        if (err) throw err;
        res.json(queryResult);
      });
    db.close();
  });
});

// Search for an item in the sell list

router.get("/sell/:id", (req, res) => {
  const id = req.params.id;
  const findObject = mongodb.ObjectId(id);
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("sellItems")
      .findOne({ _id: findObject }, (err, queryResult) => {
        if (err) throw err;
        res.json(queryResult);
      });
    db.close();
  });
});

// Get all buy requests of a users

router.get("/buy/:user", (req, res) => {
  const user = req.params.user;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("buyItems")
      .find({ Owner: user })
      .sort({ postDate: -1 })
      .toArray((err, queryResult) => {
        if (err) throw err;
        res.json(queryResult);
      });
    db.close();
  });
});

// Get all sell requests of a users

router.get("/sell/:user", (req, res) => {
  const user = req.params.user;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("sellItems")
      .find({ Owner: user })
      .sort({ postDate: -1 })
      .toArray((err, queryResult) => {
        if (err) throw err;
        res.json(queryResult);
      });
    db.close();
  });
});

// Get all items for sale of a particular Category

router.get("/sell/:category", (req, res) => {
  const type = req.params.category;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("sellItems")
      .find({ Type: user })
      .sort({ postDate: -1 })
      .toArray((err, queryResult) => {
        if (err) throw err;
        res.json(queryResult);
      });
    db.close();
  });
});

// Get all items requested in a particular Category

router.get("/buy/:category", (req, res) => {
  const type = req.params.category;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("buyItems")
      .find({ Type: user })
      .sort({ postDate: -1 })
      .toArray((err, queryResult) => {
        if (err) throw err;
        res.json(queryResult);
      });
    db.close();
  });
});

module.exports = router;
