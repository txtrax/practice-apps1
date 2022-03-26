const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary', {useNewUrlParser: true, useUnifiedTopology: true});

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
const friendSchema = mongoose.Schema({
  name: {type: String, unique: true},
  phrase: String
})

//make model and add blueprint
const Friend = mongoose.model('Friend', friendSchema);

// let friends = [
//   {
//     name: 'Theresa',
//     phrase: 'Wait what?!'
//   },
//   {
//     name: 'Annie',
//     phrase: 'I cannot right now'
//   },
//   {
//     name: 'Paul',
//     phrase: 'WHAT DUHH'
//   },
//   {
//     name: 'John',
//     phrase: 'Please hold my hand'
//   },
// ]

let create = (newObj, callback) => {
  let newFriend = new Friend(newObj);
  newFriend.save(callback);
}

let retrieve = (query = '', callback) => {
  if (query !== '') {
    Friend.find({name: query}, (err, data) => {
      if (err) {
        callback(err);
      } else if (data.length === 0) {
        err = new Error('error');
        callback(err);
      } else {
        callback(null, data);
      }
    });
  } else {
    Friend.find({}, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
}

let replace = (query, change, callback) => {
  //find object that match name property
  //replace it with change
  //grab the whole thing and send back
  Friend
    .findOneAndUpdate({name: query}, {phrase: change}, (err, data) => {
      if (err) {
        callback(err);
      } else {
        Friend.find({}, (err, data) => {
          if (err) {
            callback(err);
          } else {
            callback(null, data);
          }
        })
      }
    })
}

module.exports.create = create;
module.exports.retrieve = retrieve;
module.exports.replace = replace;
module.exports.Friend = Friend;