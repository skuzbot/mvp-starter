import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: '',
      entomology: '',
      definitions: [],
      exampleSentence: '',
      pronunciationURL: '',
      words: []
      //images: [],
    }
  }

  componentDidMount() {
    
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
            <Search />
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