// require express
const express = require("express");
// require mongoose
const mongoose = require("mongoose");
// instance of express
const app = express();

const logger = require("morgan");

const PORT = process.env.PORT || 3000;

// const db = require("./models/Workout")
const db = require("./models");
app.use(logger("dev"));
// for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Requiring routes
require("./routes/html-routes.js")(app);
app.use(require("./routes/api-routes"))


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
