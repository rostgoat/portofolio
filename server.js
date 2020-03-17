import express, { static } from "express";
const port = process.env.PORT || 8080;
const app = express();

app.use(static(__dirname + "/dist/"));

// reroutes user back to index when URI is changed
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");
