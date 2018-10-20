const config = require('../config.js');
const axios = require('axios');

searchPixabay = (query) => {
  return new Promise((resolve, reject) => {
    axios.get('https://pixabay.com/api/', {
      headers: {
        key: config.PIXABAY_KEY,
        q: query,
        safesearch: true,

      }
    })
  })
  .then(response => {
    console.log('pixabady response', response)
    resolve(response)
  })
  .catch(error => {
    console.log('pixabay error: ', error)
    reject(error);
  })
}

module.exports.searchPixabay = searchPixabay;