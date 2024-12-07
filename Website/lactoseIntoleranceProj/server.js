// Using the following tutorials:
// - Markdown Blog Tutorial - https://www.youtube.com/watch?v=1NrHkjlWVhMhttps://www.youtube.com/watch?v=1NrHkjlWVhMhttps://www.youtube.com/watch?v=1NrHkjlWVhMhttps://www.youtube.com/watch?v=1NrHkjlWVhM

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(5000);