const app=require("./index")
const connect= require("./configs/db")

app.listen(4000,async()=>{
    try {
        await connect()
        console.log("Its Titan ka server")

    } catch (error) {
        console.log(error.message)
    }
})