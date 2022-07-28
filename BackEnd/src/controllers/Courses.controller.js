
const express= require("express")
const Course = require("../models/Course.model")

const router= express.Router()

router.get("/",async(req,res)=>{
    try {
        const courses=await Course.find().lean().exec()
        return res.status(200).send(courses)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})


module.exports=router