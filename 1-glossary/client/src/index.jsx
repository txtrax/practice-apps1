import React from 'react';
import { render } from "react-dom";
// import ReactDOM from "react-dom";
import axios from 'axios';
import EntryList from './components/EntryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.editPhrase = this.editPhrase.bind(this);
  }

  componentDidMount() {
    axios.get('/friends')
    .then((response) => {
      this.setState({friends: response.data});
    })
    .catch((err) => {
      console.log('nope')
    })
  }

  editPhrase(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(e.target.name)
    console.log(this.props.friend)

    axios.put({})

  }

  handleSubmit(e) {
    // console.log("event phrase", e.target.phrase.value, "event name", e.target.firstName.value)
    e.preventDefault();

    axios.post('/friends', {
      name: e.target.firstName.value,
      phrase: e.target.phrase.value
    })

    .then(() => {
      axios.get('/friends')
      .then((response) => {
        this.setState({friends: response.data});
      })
      .catch((err) => {
        console.log('oh no')
      })
    })

    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const friends = this.state.friends;
    const list = friends.map((friend) => {
      return (
        <li>
          {friend.name} : {friend.phrase}
          <button>Edit</button>
        </li>
      )
    })
    return (
      <div>
        <h2>Hello World!</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
          <label>
          Name:
          <input name="firstName" type="text" placeholder="add friend here"  />
          Phrase:
          <input name="phrase" type="text" placeholder="add catch phrase"  />
          </label>
          <input type="submit" value="Add"/>
          </form>
        </div>
        <div>
          <EntryList friends={this.state.friends} edit={this.editPhrase}/>
        </div>
      </div>
    )
  };
}

render(<App />, document.getElementById('root'));