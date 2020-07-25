// Dependancies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// defining workout schema
const WorkoutSchema = new Schema({
  // day: {
  //   type: Date,
  //   default: Date.now,
  // },
  // exercises:[{
  //   type: {
  //     type: Schema.Types.ObjectId,
  //     // use populate() in query
  //     ref: "Exercise", //must match model 
  //   }
  // }]
  name:{
    type:String,
     trim:true,
     required:"Workout name is required",
  },
  price:{
    type:String, 
    trim:true, 
    required:"Pizza price sis required"
  },
  size:{
    type:Number,
  }
});

// exporting model on mongoose instance passing in collection and schema
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
