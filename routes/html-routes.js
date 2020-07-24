const path=require("path")


module.exports = function(app){
// get route to exercise page
app.get("/exercise",(req,res)=>{
  res.sendFile(path.join(__dirname,"../public/exercise.html"))
})

// get route to stats page
app.get("/stats",(req,res)=>{
  res.sendFile(path.join(__dirname,"../public/stats.html"))
})

}

