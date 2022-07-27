const express = require("express")
const app = express()
const cors = require("cors")

const authRouter = require("./controllers/auth")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/auth", authRouter)

module.exports = app