const express = require("express");
const app = express();
const mongodb = require("mongodb");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kunalverma:kunalverma2017@cluster0-9flyf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const router = express.Router();


// Search for a user

router.get("/users/:id", async (req, res) => {
    const id = req.params.id;
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("users").findOne({username: id}, async (err, queryResult) => {
            if(err) throw err;
            res.json(queryResult);
        });
        db.close();
    });
});

// Get all items from the buy list, in descending order of date

router.get("/buy", async (req, res) => {
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("buyItems").find().sort({postDate: -1}).toArray(async (err, queryResult) => {
            if(err) throw err;
            await res.json(queryResult);
        });
        db.close();
    });
});

// Get all items from the sell list, in descending order of date

router.get("/sell", async (req, res) => {
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("sellItems").find().sort({postDate: -1}).toArray(async (err, queryResult) => {
            if(err) throw err;
            await res.json(queryResult);
        });
        db.close();
    });
});

// Search for an item in the buy list

router.get("/buy/:id", async (req, res) => {
    const id = req.params.id;
    const findObject = mongodb.ObjectId(id);
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("buyItems").findOne({_id: findObject}, async (err, queryResult) => {
            if(err) throw err;
            res.json(queryResult);
        });
        db.close();
    });
});

// Search for an item in the sell list

router.get("/sell/:id", async (req, res) => {
    const id = req.params.id;
    const findObject = mongodb.ObjectId(id);
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("sellItems").findOne({_id: findObject}, async (err, queryResult) => {
            if(err) throw err;
            res.json(queryResult);
        });
        db.close();
    });
});

// Get all buy requests of a users

router.get("/buy/:user", async (req, res) => {
    const user = req.params.user;
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("buyItems").find({Owner: user}).sort({postDate: -1}).toArray(async (err, queryResult) => {
            if(err) throw err;
            res.json(queryResult);
        });
        db.close();
    });
});

// Get all sell requests of a users

router.get("/sell/:user", async (req, res) => {
    const user = req.params.user;
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("sellItems").find({Owner: user}).sort({postDate: -1}).toArray(async (err, queryResult) => {
            if(err) throw err;
            res.json(queryResult);
        });
        db.close();
    });
});

// Get all items for sale of a particular Category

router.get("/sell/:category", async (req, res) => {
    const type = req.params.category;
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("sellItems").find({Type: user}).sort({postDate: -1}).toArray(async (err, queryResult) => {
            if(err) throw err;
            res.json(queryResult);
        });
        db.close();
    });
});

// Get all items requested in a particular Category

router.get("/buy/:category", async (req, res) => {
    const type = req.params.category;
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("buyItems").find({Type: user}).sort({postDate: -1}).toArray(async (err, queryResult) => {
            if(err) throw err;
            res.json(queryResult);
        });
        db.close();
    });
});


module.exports = router;
