const express=require("express")
const app= express()
const courses= require("./controllers/Courses.controller")
const PurchasedCourse=require("./controllers/Mycourses.controller")
const cartcourses= require("./controllers/CartCourse.controller")
const cors= require("cors")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
 
app.use("/course",courses)
app.use("/my-courses",PurchasedCourse)
app.use("/cart",cartcourses)
module.exports=app