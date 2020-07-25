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

// api route for retrieving all workouts
app.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((foundWorkouts) => {
    console.log(foundWorkouts)
    res.json(foundWorkouts);
  });
});
// api route for creating a workout
app.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then((createdWorkout) => {
    console.log(createdWorkout)
    res.json(createdWorkout);
  });
});

app.put("/api/workouts/:id",(req,res)=>{
  db.Workout.update(
    {_id:req.params.id},
    {$push:{exercises:req.body}}
  ).then(results=>{
    console.log(results)
    res.json(results)
  })
})
// need to get all workouts from backend using /api/workouts/range
app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).then((allWorkouts) => {
    console.log(allWorkouts)
    res.json(allWorkouts);
  });
});

// Requiring routes
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
