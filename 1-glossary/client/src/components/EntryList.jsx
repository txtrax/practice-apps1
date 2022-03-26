import React from 'react';
import EntryListPair from './EntryListPair.jsx';

const EntryList = (props) => {
  return (
    <div>
      {props.friends.map((friend) => {
        return <EntryListPair friend={friend} edit={props.editPhrase}/>
      })}
    </div>
  )
};

export default EntryList;