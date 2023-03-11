const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello cool world");
});

app.listen(5678, () => {
  console.log("Server listening on port 5678!");
});
