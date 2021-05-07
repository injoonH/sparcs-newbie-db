const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const todoRouter = require("./routes/todo");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("hello, sparcs!");
});

app.get("/users", (req, res) => {
  res.send("유저 페이지에 방문하셨습니다.")
})

app.get("/fruits", (req, res) => {
  res.send("과일 페이지에 방문하셨습니다.")
})

// parameter을 이용한 dynamic routing
app.get("/id/:id", (req, res) => {
  res.send(req.params.id+"라는 id를 찾아오셨군요.")
})

// query를 이용한 dynamic routing
app.get("/querytest", (req, res) => {
  if (req.query.name && req.query.age){
    res.send("당신의 나이와 이름은......<br>나이 : "+req.query.age+"<br>이름 : "+req.query.name);
  } else {
    res.send("query를 보내면 뭘 보냈는지 맞혀볼게요.")
  }
})

// static routing
app.get("/cheezecat", (req, res) => {
  res.sendFile(path.join(__dirname,"static","cheezecat.jpg"));
})

app.get("/blackwhitecat", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "blackwhitecat.jpg"))
})

app.get("/humancat", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "humancat.jpg"))
})

app.get("/cat/:catname", (req, res) => {
  res.sendFile(path.join(__dirname, "static", req.params.catname+".jpg"))
})

app.listen(port, () => {
    console.log(port+"에서 express 실행 중");
});
