// Dependancies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./models");

// instance of express
const app = express();
// defining port
const PORT = process.env.PORT || 3000;
// use morgan logger
app.use(logger("dev"));

// for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// boilerplate for mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://sharon:sharon123@ds247688.mlab.com:47688/heroku_gh8v4qvg", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Requiring routes
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes"))

// listener for port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// things to work on....
// creating new workout gets added as next day but totalDuration adds fine.