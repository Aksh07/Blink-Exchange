const express = require("express");
const router = express.Router();

/* 
    
    CSS

*/

//searchstyle.css

router.get("/css/searchstyle.css", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/css/searchstyle.css"
  );
});

//searchtry.css
router.get("/css/searchtry.css", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/css/searchtry.css"
  );
});

//style.css
router.get("/css/style.css", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/css/style.css"
  );
});

//BUY_SELL_HOME.css
router.get("/css/buy_sell_home.css", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/css/buy_sell_home.css"
  );
});

//back.png

router.get("/css/back.png", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/css/back.png"
  );
});

//searchback.jpeg

router.get("/css/searchback.jpeg", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/css/searchback.jpeg"
  );
});

/*


    FCSS

*/

// daterangepicker.css

router.get("/fcss/daterangepicker.css", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/fcss/daterangepicker.css"
  );
});

//font-awesome.min.css

router.get("/fcss/font-awesome.min.css", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/fcss/font-awesome.min.css"
  );
});

//main.css

router.get("/fcss/main.css", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/fcss/main.css"
  );
});

//material-design-iconic-font.min.css

router.get("/fcss/material-design-iconic-font.min.css", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/fcss/material-design-iconic-font.min.css"
  );
});

//select2.min.css

router.get("/fcss/select2.min.css", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/fcss/select2.min.css"
  );
});

/*

    FJS

*/

//daterangepicker.js

router.get("/fjs/daterangepicker.js", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/fjs/daterangepicker.js"
  );
});

//global.js

router.get("/fjs/global.js", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/fjs/global.js"
  );
});

//jquery.min.js

router.get("/fjs/jquery.min.js", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/fjs/jquery.min.js"
  );
});

//moment.min.js

router.get("/fjs/moment.min.js", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/fjs/moment.min.js"
  );
});

//select2.min.js

router.get("/fjs/select2.min.js", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/fjs/select2.min.js"
  );
});

/*

    PAGES

*/

// Homepage

router.get("/", (req, res) => {
  res.sendFile("/home/kunal/Documents/Blink-Exchange  (Local Copy)/index.html");
});

router.get("/index.html", (req, res) => {
  res.sendFile("/home/kunal/Documents/Blink-Exchange  (Local Copy)/index.html");
});

router.get("/buy.html", (req, res) => {
  res.sendFile("/home/kunal/Documents/Blink-Exchange  (Local Copy)/buy.html");
});

router.get("/buypage1.html", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/buypage1.html"
  );
});

router.get("/buysearch.html", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/buysearch.html"
  );
});

router.get("/catalog.html", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/catalog.html"
  );
});

router.get("/buyform.html", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/buyform.html"
  );
});

router.get("/sellform.html", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/sellform.html"
  );
});

router.get("/sell.html", (req, res) => {
  res.sendFile("/home/kunal/Documents/Blink-Exchange  (Local Copy)/sell.html");
});

router.get("/sellpage1.html", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/sellpage1.html"
  );
});

router.get("/sellsearch.html", (req, res) => {
  res.sendFile(
    "/home/kunal/Documents/Blink-Exchange  (Local Copy)/sellsearch.html"
  );
});

// Exporing the router

module.exports = router;
