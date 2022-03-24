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
  db.Friend.find({}).exec((err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result);
    }
  })
})

// app.post('/friends', ((req, res) => {
//   console.log(req.body.name);

//   db.create(req.query, (err, data) => {
//     if (err) {
//       res.status(404).send('error in server get')
//     } else {


//       res.status(200).send('We did it')
//     }
//   })
// }))

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
