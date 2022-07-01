const express = require("express");
const app = express();
const port = 3000;

const requestMiddleWare = (req, res, next) => {
  console.log("request URL : ", req.originalUrl, "-", new Date());
  next();
};

app.get("/", (req, res) => {
  console.log("메인 화면입니다");
  const path = require("path");
  res.sendFile(path.join(__dirname + "/static/index.html"));
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 연결되었습니다.");
});
