 
const express=require("express")
const app= express()
const cors= require("cors")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use(ignoreFavicon);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  
  app.get("/",(req,res)=>{
    return res.send("Hellow, This is Back to School API")
  })
 
function ignoreFavicon(req, res, next) {
 if (req.originalUrl.includes('/favicon.ico')) {
   res.status(204).end()
 }
 next();
}



const courses= require("./controllers/Courses.controller")
const PurchasedCourse=require("./controllers/Mycourses.controller")
const cartcourses= require("./controllers/CartCourse.controller")
const authRouter = require("./controllers/auth")

app.use("/course",courses)
app.use("/my-courses",PurchasedCourse)
app.use("/cart",cartcourses)
 

app.use("/auth", authRouter)

module.exports = app
 
