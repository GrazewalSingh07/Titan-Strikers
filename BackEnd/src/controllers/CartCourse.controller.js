
const express= require("express")
const authenticate = require("../middlewares/authenticat")
const CartCourse=require("../models/CoursesinCart")

const router= express.Router()

 
router.get("/",authenticate,async(req,res)=>{
    try {
      let cartcourses=CartCourse.find({_id:req.body.id}).lean().exec()
        
        return res.status(200).send(cartcourses)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
router.post("/",authenticate,async(req,res)=>{
    try {
        console.log(req.body)
    //   let cartcourses=CartCourse.find({_id:req.body.id}).lean().exec()
        await CartCourse.create({
            courseId:req.body.id
        })
        return res.status(200).send("added to cart")
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
module.exports=router