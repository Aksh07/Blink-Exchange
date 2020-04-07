const express = require("express");
const app = express();
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://kunalverma:kunalverma2017@cluster0-9flyf.mongodb.net/test?retryWrites=true&w=majority";
const router = express.Router();

// Search for a user

router.get("/users/getByUserId:id", (req, res) => {
  const id = req.params.id;
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo.collection("users").findOne({ googleId: id }, (err, queryResult) => {
      if (err) throw err;
      console.log(queryResult);
      if (queryResult == null) return res.sendStatus(404);
      else {
        res.status(200).json(queryResult);
      }
      db.close();
    });
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

router.get("/buy/getByName:name", (req, res) => {
  const name = req.params.name;
  console.log(name);
  MongoClient.connect(uri, { useNewUrlParser: true }, async (err, db) => {
    if (err) throw err;
    let dbo = await db.db("BlinkDatabase");
    dbo
      .collection("buyItems")
      .find({ $text: { $search: name, $caseSensitive: false } })
      .project({ score: { $meta: "textScore" } })
      .sort({ score: { $meta: "textScore" } })
      .toArray((err, queryResult) => {
        if (err) throw err;
        console.log(queryResult);
        res.status(200);
        res.json(queryResult);
      });
    db.close();
  });
});

router.get("/sell/getByName:name", (req, res) => {
  const name = req.params.name;
  console.log(name);
  MongoClient.connect(uri, { useNewUrlParser: true }, async (err, db) => {
    if (err) throw err;
    let dbo = await db.db("BlinkDatabase");
    dbo
      .collection("sellItems")
      .find({ $text: { $search: name, $caseSensitive: false } })
      .project({ score: { $meta: "textScore" } })
      .sort({ score: { $meta: "textScore" } })
      .toArray((err, queryResult) => {
        if (err) throw err;
        console.log(queryResult);
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

// Search for an item in the sell list

router.get("/sell/getById:id", (req, res) => {
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

router.get("/buy/getByUser:user", (req, res) => {
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

router.get("/sell/getByUser:user", (req, res) => {
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

router.get("/sell/getByCategory:category", (req, res) => {
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

router.get("/buy/getByCategory:category", (req, res) => {
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
