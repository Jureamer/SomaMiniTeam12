const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log(`server is running on port num ${port}`);
});
