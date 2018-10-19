const express = require('express');
const bodyParser = require('body-parser');
const words = require('../database-mongo');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api/words', function (req, res) {
  words.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log('listening on port 3000!');
});

