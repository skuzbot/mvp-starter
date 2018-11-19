import React from 'react';

const borderStyle = {
  border: '1px solid black',
  _width: '70%',
  get width() {
    return this._width;
  },
  set width(value) {
    this._width = value;
  },
  background: '#aaafb7',
  paddingRight: '20px',
  paddingLeft: '0px',
}

const fontBig = {
  fontSize: '40px',
  'padding': '0px',
}

const fontMed = {
  fontSize: '30px'
}

const Definition = (props) => ( 
  <td style={borderStyle}>
    <ul>
      <div>
        Word:
      </div>
      <div style={fontBig}>
        {props.currentWord}
      </div>
    </ul>
    <ul>
      <div>
        Definition:
      </div>
      <div style={fontMed}>
       {props.definitions[0]}
      </div>
    </ul>
    <ul>
      Etymology: {props.etymology}
    </ul>
    <ul>
      Pronunciation: 
    <div>
      <audio
          id="pronunciation"
          controls
          src={props.pronunciationURL}>
          Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
    </ul>
  </td>
)

export default Definition;