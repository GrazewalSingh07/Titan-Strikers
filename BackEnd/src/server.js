const app=require("./index")
const connect= require("./configs/db")
const PORT = process.env.PORT || 4000
app.listen(PORT,async()=>{
    try {
        await connect()
        
    } catch (error) {
        console.log(error.message)
    }
})