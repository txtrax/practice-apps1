require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

//CONTROLLERS
app.get('/friends', (req, res) => {
  // console.log(req.query)
  let {name} = req.query;
  db.retrieve(name, ((err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result);
    }
  }))
})

app.post('/friends', (req, res) => {
  // console.log('inside server post request');
  db.create(req.body, (err, data) => {
    if (err) {
      res.status(404).send()
    } else {
      res.status(201).send();
    }
  })
})

app.put('/friends', (req, res) => {
  // console.log('this is phrase', req.body.phrase)
  // console.log('this is body name', req.body.name)
  db.replace(req.body.name, req.body.phrase, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data);
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
