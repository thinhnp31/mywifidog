// server.js

const express = require('express');
const app = express();
const port = 80;
const crypto = require('crypto')
app.listen(port, function(){
  console.log('Server is running on port ' + port + "...");
  
});

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/auth", (req, res) => {
  console.log("Auth: ")
  console.log(req.query);
  res.send(JSON.stringify({auth: 1}));
})

app.get("/login", (req, res) => {
  console.log("Login: ")
  console.log(req.query);
  res.sendFile("./view/login.html", { root : __dirname});
})

// app.get("/submit", (req, res) => {
//   console.log("Submit: ")
//   console.log(req.query);
//   let random = Math.random().toString();
//   let token = crypto.createHash('sha1').update(random).digest('hex');
//   res.redirect("http://1.2.3.4:2060/auth?token=" + token);
// })

app.get("/portal", (req, res) => {
  console.log("Auth: ")
  console.log(req.query);
  res.send("Success!");
})