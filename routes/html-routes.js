// this file offers a set of routes for sending users to the various html pages
// Dependancies
const path = require("path");
const router = require("express").Router();


  // exercise route loads exercise page
  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // stats route loads stats page
  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });


module.exports = router;