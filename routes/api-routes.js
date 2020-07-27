const router = require("express").Router();
const db = require("../models");
// api route for retrieving all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((foundWorkouts) => {
      res.json(foundWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
// api route for creating a workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((createdWorkout) => {
      res.json(createdWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
// need to get all workouts from backend using /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((allWorkouts) => {
      res.json(allWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
// api route to delete all data inside collection(workouts)
router.delete("/api/workouts", (req, res) => {
  db.Workout.deleteMany({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
