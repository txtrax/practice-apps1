require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js');
console.log()

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

//CONTROLLERS
app.get('/friends', ((req, res) => {
  // console.log(req.query)
  let {name} = req.query;
  db.retrieve(name, ((err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result);
    }
  }))
}))

app.post('/friends', ((req, res) => {
  db.create(req.query)
  res.status(201).end();
}))

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
