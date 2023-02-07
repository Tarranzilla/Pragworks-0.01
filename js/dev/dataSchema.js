const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: true },
    username: { type: String, required: true },
    likes_cats: { type: Boolean, required: true },
    age: { type: Number, required: true },
    profession: { type: String, required: true },
});

exports = module.exports = mongoose.model("Dados", dataSchema, "users");
