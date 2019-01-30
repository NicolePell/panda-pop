import React from 'react'

import youtube from '../apis/youtube'
import SearchBar from './SearchBar'

class PandaPop extends React.Component {
  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: `${term} karaoke`
      }
    })
  }

  

  render() {
    return (
      <div className="ui container">
        <h1>PandaPop</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    ) 
  }
}

export default PandaPop