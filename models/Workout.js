// Dependancies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// defining workout schema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises:[{
    type: {
      type: String,
      trim: true,
      required: "Type is required",
    },
    name: {
      type: String,
      trim: true,
      required: "Name is required. Enter name value",
    },
    duration: {
      type: Number,
      required: "Duration is required. Enter duration value",
    },
    weight: {
      type: Number,
      required: "Weight is required. Enter weight value",
    },
    reps: {
      type: Number,
      required: "Reps is required. Enter reps value",
    },
    sets: {
      type: Number,
      required: "Sets is required. Enter sets value",
    },
    distance: {
      type: Number,
      required: "Distance is required. Enter distance value",
    },
  }]
},
// not stored in db but to read/compute the property specified
{
  toJSON:{
    virtuals:true
  }
});
// computes the totalDuration via a virtual
WorkoutSchema.virtual("totalDuration").get(function() {
  // reduce returns only one value 
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
// exporting model on mongoose instance passing in collection and schema
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
