import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //search states:
      query: 'willow',

      //app states:
      currentWord: '',
      entomology: '',
      definitions: [],
      //exampleSentence: '',
      pronunciationURL: '',
      words: []
      //images: [],
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.textGone = this.textGone.bind(this);
    this.getWords = this.getWords.bind(this);
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
      // console.log('json parse: ', JSON.stringify(words));
      // console.log(`wordsObj on client get is ${words.data[0].word.word}`)
      let wordsArray = words.data.map(word => (word.word.word));
      //console.log('wordsArray :', wordsArray);
      this.setState({
        words: wordsArray
      })
    })
    .catch(error => {
      console.log(`error on client index.jsx getting messages from server ${error}`);
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
    .then(res => {
      this.getWords();
      
    })
    .catch(function (error) {
      console.log('index.jsx error: ', error);
    });
  }


  componentDidMount() {

    this.getWords()
    
    // axios.get('/api/words')
    // .then(words => {
    //   // console.log('json parse: ', JSON.stringify(words));
    //   // console.log(`wordsObj on client get is ${words.data[0].word.word}`)
    //   let wordsArray = words.data.map(word => (word.word.word));
    //   //console.log('wordsArray :', wordsArray);
    //   this.setState({
    //     words: wordsArray
    //   })
    // })
    // .catch(error => {
    //   console.log(`error on client index.jsx getting messages from server ${error}`);
    // })

    // $.ajax({
    //   url: '/api/words', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (
      <table>
        <thead>
          <tr>Search a Word!!</tr>
        </thead>
        <tbody>
          <tr>
            <Search 
              query={this.state.query}
              onChange={this.onChange}
              search={this.search}
              textGone={this.textGone}
              getWords={this.getWords}
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