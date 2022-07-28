
const mongoose= require("mongoose")

const CartCourseSchema=new mongoose.Schema({
    courseId:{type:mongoose.Types.ObjectId, ref:"course",required:true},
    userId:{type:mongoose.Types.ObjectId, ref:"user",required:true}
})
const CartCourse= mongoose.model("cartcourse",CartCourseSchema)

module.exports=CartCourse