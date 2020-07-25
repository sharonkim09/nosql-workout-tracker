// this file offers a set of routes for sending users to the various html pages
// Dependancies
const path = require("path");

module.exports = function (app) {
  // exercise route loads exercise page
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // stats route loads stats page
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
