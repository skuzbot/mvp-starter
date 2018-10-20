const express = require('express');
const bodyParser = require('body-parser');
const {saveWord, selectAll} = require('../database-mongo');
const {searchOxfordWords} = require('../helpers/searchOxford.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/api/search', (request, response) => {
  console.log(request.body, 'was sent as a request to app.post /api/search'); // request.body is {query: 'term'}
  //console.log('1st date.now: ', Date.now());
  
  //searchOxfordWords(request.body.query, (data) => (console.log(data)));

  searchOxfordWords(request.body.query)
    .then(data => {
      //console.log('data in .then of searchOxfordWords on server', data);
      dataObj = JSON.stringify(data);
      
      saveWord(dataObj)
      .then(res => {
        console.log('data saved')
        response.end(`post end in saveWord .then sent res: ${res}`);
      })
      .catch(err => {
        console.log(`error in saveWord on server ${err}`);
        response.status(500).end();
      });
    })
    .catch(error => {
      console.log(`error in server .catch ${error}`);
      response.status(500).end()
    });
    //   if (err) {
    //     console.log(`error in saveWords callback ${err}`);
    //   } else {
    //     console.log('2nd date.now: ', Date.now());
    //     response.end(`search response: ${res} sent to search.jsx with timestamp: ${Date.now()}`);
    //   }
    // }
})

app.get('/api/words', (request, response) => {
  console.log('request in app.get in server is ', request.body)

  selectAll((err, words) => {
    if (err) {
      console.log(`error in app.get words on server ${err}`);
      response.status(500).end('error on server in app.get /api/words')
    } else {
      //console.log('words from select all ', words)
      let wordsArray = words.map(word => {
        return {word};
      })
      //console.log('wordsArray :', wordsArray);
      response.status(200).json(wordsArray).end();  //? is end() needed?
    }
  })
})

// app.get('/api/words', function (req, res) {
//   words.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(200);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(port, function() {
  console.log('listening on port 3000!');
});

