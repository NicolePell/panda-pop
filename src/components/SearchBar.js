import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Search for a karaoke video...</label>
            <input type="text" />
          </div>
        </form>
      </div>
    ) 
  }
}

export default SearchBar