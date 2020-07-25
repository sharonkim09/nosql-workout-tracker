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
      type: Schema.Types.ObjectId,
      // use populate() in query
      ref: "Exercise", //must match model 
    }
  }]
});

// exporting model on mongoose instance passing in collection and schema
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
