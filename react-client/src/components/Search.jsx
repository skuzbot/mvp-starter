import React from 'React';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    
  }

  render() {
    return (
      
        <td>
          <input
            type="text"
            name="searchBar"
            value={this.props.query}
            onChange={this.props.onChange}
            onClick={() => this.props.textGone()}
          />
          <input
            type="button"
            name="submitSearch"
            value="Search"
            onClick={() => {
              this.props.search(this.props.query);
              //this.props.getWords();
            }}
            />  
        </td>
    
    )
  }
}

export default Search
