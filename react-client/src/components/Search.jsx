import React from 'React';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: 'database'
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
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

  search(query) {
    console.log(query, ' was searched from client!');
    axios.post('/api/search', {
      query: this.state.query
    })
    .then(function (response) {
      console.log('searchjsx response: ', response);
    })
    .catch(function (error) {
      console.log('searchjsx error: ', error);
    });

    
    
  }

  render() {
    return (
      
        <td>
          <input
            type="text"
            name="searchBar"
            value={this.state.query}
            onChange={this.onChange}
            onClick={() => this.textGone()}
          />
          <input
            type="button"
            name="submitSearch"
            value="Search"
            onClick={() => this.search(this.state.query)}
          />  
        </td>
    
    )
  }
}

export default Search
