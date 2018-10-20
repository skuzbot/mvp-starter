const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/wordSearcher");

const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
});

const wordSchema = new mongoose.Schema({
  _id: String,
  word: String,
  // lexicalCatagory: String,
  // etymology: String,
  // definitions: Array,
  // pronunciation_Url: String,
});

const Word = mongoose.model("Word", wordSchema);

const saveWord = (responseData) => {
  //console.log(`***+++*** response data on database is: ${responseData}`);
  return new Promise((resolve, reject) => {

    let dataObj = JSON.parse(responseData);
  
    //console.log('dataObj.lexicalEntries passed into saveWord on database is: ', dataObj.lexicalEntries[0].entries[0].senses[0]);

    let newWord = {
      id: dataObj.id,
      word: dataObj.word,
      // lexicalCatagory: dataObj.lexicalEntries[0].lexicalCategory,
      // etymology: dataObj.lexicalEntries[0].entries[0].etymologies[0],
      // definitions: dataObj.lexicalEntries[0].entries[0].senses.map(sense => (sense.definitions[0])),
      // pronunciation_Url: dataObj.lexicalEntries[0].pronunciations[0].audioFile
    }
  
    //console.log(`newWord in db is ${newWord}`);
  
    newWord = new Word({
      _id: newWord.id,
      word: newWord.word,
      // lexicalCatagory: newWord.lexicalCategory,
      // etymology: newWord.etymology,
      // definitions: newWord.definitions,
      // pronunciation_Url: newWord.pronunciation_Url
    });
  
    Word.findOneAndUpdate(
      { _id: newWord.id },
      newWord,
      { upsert: true },
      (err, newWord) => {
        if (err) {
          reject(err => {
            console.log(`error occurred saving word to database ${err}`);
            cb(err, null);
          })
        } else {
          resolve(newWord => {
            cb(null, newWord);
          })
        }
      }
    );


  })
};

const selectAll = function(callback) {
  Word.find({}, function(err, words) {
    if (err) {
      console.log(`err in selectAll on db ${err}`)
      callback(err, null);
    } else {
      console.log(`words in selectAll on db ${words}`)
      callback(null, words);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveWord = saveWord;
