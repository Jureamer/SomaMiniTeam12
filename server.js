const express = require("express");
const app = express();
const path = require("path");
const port = 3001;

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log("logging for routers");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

app.get("/board", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "board.html"));
});

app.listen(port, () => {
  console.log(`server is running on port num ${port}`);
});
