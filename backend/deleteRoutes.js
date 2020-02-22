const express = require("express");
const app = express();
const mongodb = require("mongodb");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kunalverma:kunalverma2017@cluster0-9flyf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const router = express.Router();
const jsonParser = require("body-parser");

// Remove a user

router.delete("/users/:id", async (req, res) => {
    const removeUser = req.params.id;
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("users").deleteOne({username: removeUser}, async (err, queryResult) => {
            if(err) 
                throw err;
            await res.send(`User ${removeUser} successfully deleted`);
        });
        db.close();
    });
});

// Remove an item from the buy list

router.delete("/buy/:id", async (req, res) => {
    const id = req.params.id;
    const removeBuyItem = mongodb.ObjectId(id);
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("buyItems").deleteOne({_id: removeBuyItem}, async (err, queryResult) => {
            if(err) 
                throw err;
            await res.send(`Item ${id} successfully deleted  from the buy list`);
        });
        db.close();
    });
});

// Remove an item from the sell list

router.delete("/sell/:id", async (req, res) => {
    const id = req.params.id;
    const removeSellItem = mongodb.ObjectId(id);
    client.connect(async (err, db) => {
        if(err)
            throw err;
        let dbo = await db.db("BlinkDatabase");
        await dbo.collection("sellItems").deleteOne({_id: removeSellItem}, async (err, queryResult) => {
            if(err) 
                throw err;
            await res.send(`Item ${id} successfully deleted from the sell list`);
        });
        db.close();
    });
});



module.exports = router;
