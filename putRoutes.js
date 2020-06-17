const express = require("express");
const app = express();
const url = require("url");
const querystring = require("querystring");
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://kunalverma:kunalverma2017@cluster0-9flyf.mongodb.net/test?retryWrites=true&w=majority";
const router = express.Router();

// Place a bid for a buy item

router.put("/placeBidfor:bidInfo", async (req, res) => {
  console.log(req.params.bidInfo);
  let reqItem = await JSON.parse(req.params.bidInfo);
  console.log(reqItem);
  let id = reqItem._id;
  let newBid = {
    userGoogleId: reqItem.user,
    bid: reqItem.bid,
  };
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("buyItems")
      .findOneAndUpdate(
        { _id: mongodb.ObjectId(id) },
        { $push: { bids: newBid } },
        async (err, doc) => {
          if (err) throw err;
          await res.sendStatus(200);
          db.close();
        }
      );
  });
});

router.put("/placeSalefor", async (req, res) => {
  const id = mongodb.ObjectId(req.params.objId);
  const bid = req.params.bid;
  console.log(id);
  console.log(bid);
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    let dbo = db.db("BlinkDatabase");
    dbo
      .collection("sellItems")
      .update({ _id: id }, { $push: { bids: bid } }, (err, queryResult) => {
        if (err) throw err;
        res.status(200);
        db.close();
      });
  });
});

module.exports = router;
