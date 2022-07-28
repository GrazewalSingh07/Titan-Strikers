
const express= require("express")
const authenticate = require("../middlewares/authenticat")
const PurchasedCourses = require("../models/PurchasedCourses")

const router= express.Router()

 
router.get("/",authenticate,async(req,res)=>{
   
    try {
      let myPurchasedCourses=PurchasedCourses.find({_id:req.user._id}).lean().exec()
        
        return res.status(200).send(myPurchasedCourses)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
module.exports=router