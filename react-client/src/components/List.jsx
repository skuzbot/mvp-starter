import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <tr>
    <h4> Word List: </h4>
    You've saved { props.words.length } word{props.words.length === 1 ? '' : 's'}.
    { props.words.map((word, i) => <ListItem key={i} word={word}/>)}
  </tr>
)

export default List;