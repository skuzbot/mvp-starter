import React from 'react';

const tdStyle = {
  border: '1px solid black',
}
const imgStyle = {
  //width: '',
  maxWidth: '1300px'
}

const Image = (props) => (
  <td style={tdStyle}>
    <div>
      <button onClick={() => props.nextImage()}>
        New Image
      </button>
      <img
        style={imgStyle}
        src = {
          props.currentImage
        }
      />

    </div>
  </td>
)

export default Image;