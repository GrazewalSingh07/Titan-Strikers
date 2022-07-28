
const mongoose= require("mongoose")

const PurchasedCourseSchema=new mongoose.Schema({
    courseId:{type:mongoose.Types.ObjectId, ref:"course",required:true},
    userId:{type:mongoose.Types.ObjectId, ref:"user",required:true}
})
const PurchasedCourse= mongoose.model("purchasedcourse",PurchasedCourseSchema)

module.exports=PurchasedCourse