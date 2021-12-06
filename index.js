const express = require("express");
const path = require("path");
const url = require('url');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });


  app.get("/test", (req, res) => {
    res.sendFile(path.join(__dirname, "template_project.html"));
  });


  app.get("/coloseo", (req, res) => {
    res.sendFile(path.join(__dirname, "coloseo.html"));
  });

  

app.use(express.static(path.join(__dirname, "public")));

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, "404.html"));
  });

app.listen(3000,"127.0.0.1");



