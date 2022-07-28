
// Schema
// {
// "email"
// 'name'
// "password"
// "profile"

// }

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: { type: String, require: true },
    name: { type: String, require: true },
    password: { type: String, require: true },
    profile: { type: String, require: true }
})

const UserModel = model("user", userSchema);

module.exports = UserModel;