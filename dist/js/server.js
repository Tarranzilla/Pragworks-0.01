const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://pragmata:SURUBA666%21@cluster0.3gajnbx.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("Hello World");
    return res.status(200).json("Hello World");
});

app.listen(3030);

exports = module.exports = app;
