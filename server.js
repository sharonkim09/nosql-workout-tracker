// require express
const express = require("express");
// require mongoose
const mongoose = require("mongoose")
// instance of express
const app = express();

const logger = require("morgan");

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
// for data parsing
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})