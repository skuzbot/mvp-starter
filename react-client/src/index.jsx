import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Definition from './components/Definition.jsx';
import Image from './components/Image.js'

const tableStyle = {
  border: '1px solid black',
  width: '80%',
  'font-family': 'Titillium Web, sans-serif',
  'font-size': '16px',
  background: '#dcdfe5'
}

const titleFont = {
  'font-size': '24px'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //search states:
      query: 'search here!',

      //definition states:
      currentWord: '',
      etymology: '',
      definitions: [],
      //exampleSentence: '',
      pronunciationURL: '',
      words: [],
      images: []
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.textGone = this.textGone.bind(this);
    this.getWords = this.getWords.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  onChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  textGone() {
    this.setState({
      query: ''
    })
  }

  getWords() {
    axios.get('/api/words')
    .then(words => {
      console.log('json: ', JSON.stringify(words.data[words.data.length - 1]));
      // console.log(`wordsObj on client get is ${words.data[0].word.word}`)
      let wordsArray = words.data.map(word => (word.word.word));
      let uppercaseWord = words.data[words.data.length - 1].word.word.charAt(0).toUpperCase() + words.data[words.data.length - 1].word.word.substr(1);
      //console.log('wordsArray :', wordsArray);
      this.setState({
        currentWord: uppercaseWord,
        words: wordsArray,
        definitions: words.data[words.data.length - 1].word.definitions,
        etymology: words.data[words.data.length - 1].word.etymology,
        pronunciationURL: words.data[words.data.length - 1].word.pronunciation_Url ? words.data[words.data.length - 1].word.pronunciation_Url : ''
      })
    })
    .catch(error => {
      console.log(`error on client index.jsx getting messages from server ${error}`);
    })
  }

  getImages() {
    axios.post('/api/image', {
      query: query
    })
    .then(images => {
      console.log('images on client side :', images);
      this.setState({
        images: images.data
      })
    })
    .catch(error => {
      console.log('client side image search error', error)
    })
  }

  search(query) {
    console.log(query, ' was searched from client!');
    axios.post('/api/search', {
      query: this.state.query
    })
    .then(function (response) {
      console.log('index.jsx response: ', response);
    })
    .then(() => {
      axios.post('/api/image', {
        query: query
      })
      .then(images => {
        console.log('images on client side :', images);
        this.setState({
          images: images.data
        })
      })
      .catch(error => {
        console.log('client side image search error', error)
      })
    })
    .then(() => {
      this.getWords();
      
    })
    .catch(function (error) {
      console.log('index.jsx error: ', error);
    });
  }


  componentDidMount() {
    this.getWords()
    this.getImages();
  }

  render () {
    return (
      <table style={tableStyle}>
        <thead>
          <tr style={titleFont}>Search a Word!!</tr>
          <tr>
            <Search 
              query={this.state.query}
              onChange={this.onChange}
              search={this.search}
              textGone={this.textGone}
              getWords={this.getWords}
            />
          </tr>
        </thead>
        <tbody>
          <tr>
            <Definition
              currentWord={this.state.currentWord}
              definitions={this.state.definitions}
              etymology={this.state.etymology}
              pronunciationURL={this.state.pronunciationURL}
            />
            <Image 
              images={this.state.images}
            />
          </tr>
          <tr>
            <List words={this.state.words}/>
          </tr>
        </tbody>
      </table>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));