
const express= require("express")
const authenticate = require("../middlewares/authenticat")
const CartCourse = require("../models/CoursesinCart")
const PurchasedCourses = require("../models/PurchasedCourses")

const router= express.Router()

 
router.get("/",authenticate,async(req,res)=>{
   
    try {
      let myPurchasedCourses= await PurchasedCourses.find({userId:req.user._id}).populate("courseId").lean().exec()
        
        return res.status(200).send(myPurchasedCourses)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})

router.post("/",authenticate,async(req,res)=>{
    
   
    try {
        
        let temp=req.body
        
       
       temp.forEach(async(el)=>{
         await PurchasedCourses.create({courseId:el,userId:req.user._id})
       })
       await CartCourse.deleteMany({userId:req.user._id})
        
        return res.status(200).send("courses purchased")
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
module.exports=router