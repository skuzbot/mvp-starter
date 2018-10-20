const config = require('../config');
const axios = require('axios');

searchOxfordWords = (query) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://od-api.oxforddictionaries.com/api/v1/entries/en/${query}/regions=us`, {
      headers: {
        Accept: "application/json",
        app_id: config.OXFORD_APP_ID,
        app_key: config.OXFORD_KEY
      }
    })
    .then(response => {
      console.log(`.then response: ${response.data.results[0].word} with timestamp ${Date.now()}`);
      resolve(response.data.results[0]);
    })
    .catch(error => {
      console.log('.catch error: ', error)
      reject(error);
    })
  })
}

module.exports.searchOxfordWords = searchOxfordWords;