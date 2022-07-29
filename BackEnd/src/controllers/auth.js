const { Router } = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const UserModel = require("../models/user.model");
const Single = require("../middlewares/uploads");

const authRouter = Router();

authRouter.post("/signup",Single("profile"), async (req, res) => {
    try {
     
      
        // if(!profile){
        //     profile="http://www.defineinternational.com/wp-content/uploads/2014/06/dummy-profile.png"
        // }
        
        const { email, name, password} = req.body;
        if (email === "" || name === "" || password === "" ) {
            return res.send({ message: "some input fields are empty" });
        }

        const hash = crypto.pbkdf2Sync(password, "TITAN", 10, 30, "sha256").toString("hex");

        const data = await UserModel.create({ email, name, "password": hash, "profile":req.file.path });
        data.save();

        return res.status(201).send({ message: "user created successfully" });
    } catch (e) {
        return res.status(401).send({ message: e.message });
    }
})

authRouter.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === "" || password === "") {
            return res.send({ message: "some input fields are empty" });
        }

        const hash = crypto.pbkdf2Sync(password, "TITAN", 10, 30, "sha256").toString("hex");

        const user = await UserModel.findOne({ email:req.body.email}).lean().exec();

        if (user === null) {
            return res.send({ message: "user not found" });

        }

        const token = jwt.sign(user, "TITAN");

        return res.status(200).send({ message: "user signed in successfully", token ,user});
    } catch (e) {
        return res.status(401).send({ message: e.message});
    }
})

module.exports = authRouter;