/* 
Pesquisar como setar um webserver com PWA e Express ?

Express Module npm install express
Express Session Module npm install express-session 
Cookie Parser Module npm install cookie-parser
CSRF Protection Module npm install csurf

Mongo DB Module npm install mongodb
Mongo Connect Module npm install connect-mongo
*/

/* Environment Variables */
const dotenv = require("dotenv");
dotenv.config();

/* 
Connection String <password> e <dbname> 
const connectionString = "mongodb://localhost:27017";
*/
const mongodb = require("mongodb");
mongodb.connect(
    process.env.CONNECTIONSTRING,
    { useUnifiedTopology: true },
    async function (err, client) {
        const db = client.db();

        var user_list_db = db.collection("users");

        /* Wrap in try catch block */
        await user_list_db.insertOne({
            name: "tarran",
            email: "xxx@xxx.com",
        });

        /* Wrap in try catch block | Update tem 2 parametros, id e $set ... */
        await user_list_db.updateOne({
            name: "tarran",
            email: "yyy@yyy.com",
        });

        await user_list_db.updateOne({
            name: "tarran",
        });

        var users_list_array = await db.collection("users").find().toArray();
        console.log(users_list_array);
        client.close();
    }
);

const app = require("express"); /* requires express */
var http = require("http");

app.get("/", (req, res) => {
    res.setHeader("set-cookie", ["setfromserver=1"]);
    res.sendFile("${__dirname}/index.html");
});

const port = 3000;

app.listen(port, () => {
    console.log("Server is running on port " + port + ".");
});

/* escape a string of markup */
function escapeMarkup(dangerousInput) {
    const dangerousString = String(dangerousInput);
    const matchHtmlRegExp = /["'&<>]/;
    const match = matchHtmlRegExp.exec(dangerousString);
    if (!match) {
        return dangerousInput;
    }

    const encodedSymbolMap = {
        '"': "&quot;",
        "'": "&#39;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
    };
    const dangerousCharacters = dangerousString.split("");
    const safeCharacters = dangerousCharacters.map(function (character) {
        return encodedSymbolMap[character] || character;
    });
    const safeString = safeCharacters.join("");
    return safeString;
}
