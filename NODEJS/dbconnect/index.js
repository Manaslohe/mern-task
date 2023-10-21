//1 - set up package.json file -> npm init -y
//2 - install nodemon -> npm i nodemon

let http = require("http");
const mongoose = require("mongoose");

let server = http.createServer(function (req, res) {
  res.write("Hello from server, I am new line");
  res.end();
});

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/Students");
var db = mongoose.connection; //connection api or trigger connect event
db.on("open", () => {
  console.log("database connected");
});
db.on("error", (err) => {
  console.log(err);
});

let PORT = 8000;
server.listen(PORT, () => {
  console.log("server started");
});
