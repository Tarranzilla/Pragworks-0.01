/* 
Pesquisar como setar um webserver com PWA e Express ?

Express Module npm install express
Express Session Module npm install express-session 
Cookie Parser Module npm install cookie-parser
CSRF Protection Module npm install csurf

Mongo DB Module npm install mongodb
Mongo Connect Module npm install connect-mongo
*/

var http = require("http");
const app = require("./app"); /* requires express */

app.get("/", (req, res) => {
    res.setHeader("set-cookie", ["setfromserver=1"]);
    res.sendFile("${__dirname}/index.html");
});

const port = 3000;

app.listen(port, () => {
    console.log("Server is running on port " + port + ".");
});
