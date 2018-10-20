const express = require('express');
const bodyParser = require('body-parser');
const {saveWord} = require('../database-mongo');
const {searchOxfordWords} = require('../helpers/searchOxford.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/api/search', (request, response) => {
  console.log(request.body, 'was sent as a request to app.post /api/search'); // request.body is {query: 'term'}
  //need to call async
  console.log('1st date.now: ', Date.now());
  
  //searchOxfordWords(request.body.query, (data) => (console.log(data)));

  searchOxfordWords(request.body.query)
    .then(data => {
      saveWord(data, (err, res) => {
        if (err) {
          console.log(`error in saveWord on server ${error}`);
          response.end();
        } else {
          console.log('data saved')
          response.end(`post end sent res: ${res}`);
        }
      })
    })
    .catch(error => {
      console.log(`error in srever .catch ${error}`);
    });
    //   if (err) {
    //     console.log(`error in saveWords callback ${err}`);
    //   } else {
    //     console.log('2nd date.now: ', Date.now());
    //     response.end(`search response: ${res} sent to search.jsx with timestamp: ${Date.now()}`);
    //   }
    // }


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

