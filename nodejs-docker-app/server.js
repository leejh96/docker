const express = require("express");

const PORT = 8080;

//APP
const app = express();
app.get("/", (req, res) => {
  res.send("안녕하세요 반가워요 ㅎㅎㅎ!!");
});

app.listen(PORT);
console.log("Server is running");
