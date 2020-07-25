const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
