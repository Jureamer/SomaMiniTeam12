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

app.get("/board/:id", (req, res) => {
  const id = req.params.id;
  const sanitizedId = id.replace(/[^0-9]/g, ""); // 숫자가 아닌 문자를 제거하여 경로 조작을 방지합니다.

  if (sanitizedId !== id) {
    return res.status(400).send("Invalid board ID."); // 잘못된 보드 ID를 입력하면 오류 메시지를 반환합니다.
  }

  res.sendFile(
    path.join(__dirname, "public", "html", `board${sanitizedId}.html`)
  );
});

app.listen(port, () => {
  console.log(`server is running on port num ${port}`);
});
