import React from 'react';

const tdStyle = {
  border: '1px solid black',
}
const imgStyle = {
  width: '1300px',
  //'max-width': '600px'
}

let imageIndex = 0;

const imgNext = () => {
  imageIndex++
}

const Image = (props) => (
  <td style={tdStyle}>
    <div>
      <img
        style={imgStyle}
        src = {
          props.images[imageIndex] ? props.images[imageIndex] : 'https://cdn.pixabay.com/photo/2016/01/19/17/27/dictionary-1149723_1280.jpg'
        }
      />

    </div>
  </td>
)

export default Image;