
const express= require("express")
const authenticate = require("../middlewares/authenticat")
const CartCourse= require("../models/CoursesinCart")

const router= express.Router()

 
router.get("/",authenticate,async(req,res)=>{
    try {
    
      let cartcourses= await CartCourse.find({userId:req.user._id}).lean().exec()
        
        return res.status(200).send(cartcourses)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
router.post("/",authenticate,async(req,res)=>{
    try {
     
        await CartCourse.create({
           
             userId:req.user._id,
             courseId:req.body.courseId
        })
        return res.status(200).send("added to cart")
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
router.delete("/:id",authenticate,async(req,res)=>{
    try {
    
        await CartCourse.findByIdAndDelete({_id:req.params.id,userId:req.user._id})
        
        return res.status(200).send("deleteed from cart")
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
module.exports=router