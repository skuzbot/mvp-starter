const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const wordSchema = mongoose.Schema({
  _id: String,
  word: String,
  // lexicalCatagory: String,
  // etymology: String,
  // definitions: Array,
  // exampleSentence: Array,
  // pronunciation_Url: String,
});

const Word = mongoose.model('Word', wordSchema);

const saveWord = (responseData, cb) => {
  
  let newWord = responseData;
  console.log(`newWord in db is ${newWord}`);

  newWord = new Word({
    _id: newWord.id,
    word: newWord.word,
    // lexicalCatagory: newWord.lexicalEntries[0].lexicalCategory,
    // etymology: newWord.lexicalEntries[0].entries[0].etymologies[0],
    // definitions: newWord.lexicalEntries[0].entries[0].senses.map(sense => (sense.definitions[0])),
    // exampleSentence: newWord.lexicalEntries[0].entries[0].senses[0].examples[0].text,
    // pronunciation_Url: newWord.lexicalEntries[0].pronunciations[0].audioFile,
  })


  Word.findOneAndUpdate(
    {_id: newWord.id}, 
    newWord,
    {upsert: true},
    (err, word) => {
      if (err) {
        console.log(`error occurred saving word to database ${err}`)
        cb(err, null);
      } else {
        cb(null, newWord);
      }
    }
  )

}

const selectAll = function(callback) {
  Word.find({}, function(err, words) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, words);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveWord = saveWord;