const express = require("express");
const app = express();
const mongodb = require("mongodb");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kunalverma:kunalverma2017@cluster0-9flyf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const router = express.Router();
const jsonParser = require("body-parser");

// Forcing request body to be parsed as JSON

router.use(express.json());
router.use(express.urlencoded({ extended: true}));


// Add a new user

router.post("/users", async (req, res) => {
    let newUser = req.body;
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("users").insertOne(newUser, async (err, queryResult) => {
            if(err) throw err;
            await res.json(queryResult.ops);
        });
        db.close();
    });
});

// Add an item to the buy list

router.post("/buy", async (req, res) => {
    let newBuyItem = req.body;
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("buyItems").insertOne(newBuyItem, async (err, queryResult) => {
            if(err) throw err;
            await res.json(queryResult.ops);
        });
        db.close();
    });
});

// Add an item into the sell list

router.post("/sell", async (req, res) => {
    let newSellItem = req.body;
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("sellItems").insertOne(newSellItem, async (err, queryResult) => {
            if(err) throw err;
            await res.json(queryResult.ops);
        });
        db.close();
    });
});



module.exports = router;
