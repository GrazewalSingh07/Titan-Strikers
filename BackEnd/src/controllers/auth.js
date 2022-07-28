const { Router } = require("express");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const UserModel = require("../models/user.model");

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
    try {
        const { email, name, password, profile } = req.body;
        if (email === "" || name === "" || password === "" || profile === "") {
            return res.send({ message: "some input fields are empty" });
        }

        const hash = crypto.pbkdf2Sync(password, "TITAN", 10, 30, "sha256").toString("hex");

        const data = UserModel({ email, name, "password": hash, profile });
        data.save();

        return res.send({ message: "user created successfully" });
    } catch (e) {
        return res.send({ message: "error" });
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

        return res.send({ message: "user signed in successfully", token });
    } catch (e) {
        return res.send({ message: "error" });
    }
})

module.exports = authRouter;