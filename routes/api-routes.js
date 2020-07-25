
const router = require("express").Router();
const db = require("../models")
// api route for retrieving all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((foundWorkouts) => {
      console.log(foundWorkouts)
      res.json(foundWorkouts);
    });
  });
  // api route for creating a workout
  router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then((createdWorkout) => {
      console.log(createdWorkout)
      res.json(createdWorkout);
    });
  });
  
  router.put("/api/workouts/:id",(req,res)=>{
    db.Workout.update(
      {_id:req.params.id},
      {$push:{exercises:req.body}}
    ).then(results=>{
      console.log(results)
      res.json(results)
    })
  })
  // need to get all workouts from backend using /api/workouts/range
  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then((allWorkouts) => {
      console.log(allWorkouts)
      res.json(allWorkouts);
    });
  });
  // api route to delete all data inside collection(workouts)
  router.delete("/api/workouts",(req,res)=>{
    db.Workout.deleteMany({})
    .then((data)=>{
      console.log(data);
      res.json(data)
    })
  })

  module.exports = router;