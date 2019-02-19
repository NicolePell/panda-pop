import React from 'react'

import youtube from '../apis/youtube'
import SearchBar from './SearchBar'

class PandaPop extends React.Component {
  state = { videos: [] }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: `${term} karaoke`
      }
    })

    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <h1>PandaPop</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        Videos: {this.state.videos.length}
      </div>
    ) 
  }
}

export default PandaPop