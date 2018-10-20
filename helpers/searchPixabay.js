const config = require('../config.js');
const axios = require('axios');

searchPixabay = (query) => {
  return new Promise((resolve, reject) => {
    axios.get('https://pixabay.com/api/', {
      params: {
        key: config.PIXABAY_KEY,
        q: query,
        safesearch: true,

      }
    })
    .then(response => {
      //console.log('pixabady response', response.data.hits)
      imageArray = response.data.hits.map(hit => {
        return hit.largeImageURL;
      })
      console.log('imageArray is: ', imageArray);
      resolve(imageArray);
    })
    .catch(error => {
      console.log('pixabay error: ', error)
      reject(error);
    })
  })
 
}

module.exports.searchPixabay = searchPixabay;