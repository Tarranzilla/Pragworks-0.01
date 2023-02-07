const express = require("express");
const bodyParser = require("body-parser");

const Dados = require("./js/dev/dataSchema");

const dbURL =
    "mongodb+srv://pragmata:zTt1FQUiD2CN58Ug@cluster0.3gajnbx.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(dbURL, { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("Hello World");
    Dados.findOne()
        .sort("username")
        .exec((err, res) => {
            if (err) {
                return res
                    .status(500)
                    .json({ msg: "não foi possivel recuperar os arquivos" });
            }
            console.log(err, res);
        });

    console.log("Hello World2");
    console.log("Hello World3");
    return res.status(200).json("Hello World");
});

app.listen(3030);

exports = module.exports = app;
