import React from 'react';

class EntryListPair extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      name: '',
      phrase: ''
    }
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    // console.log(e.target.value);
    // console.log(e.target.name)
    // console.log(this.props.friend)
    this.setState({
      clicked: !this.state.clicked
    })
  }

  requestChange() {

  }

  render() {
    // let display;
    // if (this.state.click) {
    //   <form>
    //     <label>
    //       Phrase:
    //       <input name="phrase" type="text" placeholder="add catch phrase"  />
    //     </label>
    //     <input type="submit" value="Add"/>
    //   </form>
    // } else {
    //   display = null;
    // }

    return (
      <li>
        {this.props.friend.name} : {this.props.friend.phrase}
        <button
        name={this.props.friend.name}
        value={this.props.friend.phrase}
        onClick={this.handleEdit}>Edit</button>
      </li>

    )
  }
}

export default EntryListPair;