const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello cool world");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
