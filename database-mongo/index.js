var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var wordSchema = mongoose.Schema({
  _id: Number,
  word: String,
  lexicalCatagory: String,
  etymology: String,
  definitions: Array,
  exampleSentence: Array,
  pronunciation_Url: String,
  image_Urls: Array
});

var Word = mongoose.model('Word', wordSchema);

var selectAll = function(callback) {
  Word.find({}, function(err, words) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, words);
    }
  });
};

module.exports.selectAll = selectAll;