const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary', {useNewUrlParser: true, useUnifiedTopology: true});

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
const friendSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  phrase: String
})

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

let create = (newObj) => {
  let name = newObj.name;
  let phrase = newObj.phrase;

  let newFriend = new Friend( {name, phrase} );
  newFriend.save();

}

module.exports.create = create;
module.exports.Friend = Friend;