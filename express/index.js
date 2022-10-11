const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //res.status(200).send("INDEX SAYFASI");
  res
    .status(200)
    .sendFile("L:\\patika\\Node.js-backend\\hw3\\hw3.js", (err) => {
      console.log(err);
    });
});

app.get("/about", (req, res) => {
  res.status(200).send("ABOUT SAYFASI");
});

app.get("/contact", (req, res) => {
  res.status(200).send("CONTACT SAYFASI");
});

app.get("*", (req, res) => {
  res.status(404).send("404 SAYFA BULUNAMADI");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} da çalışmaya başladı...`);
});
