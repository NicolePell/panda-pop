import React from 'react'

import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'

class PandaPop extends React.Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: `${term} karaoke`
      }
    })

    this.setState({ videos: response.data.items })
  }

  onVideoSelect = (video) => {
    console.log('From the App!', video)
  }

  render() {
    return (
      <div className="ui container">
        <h1>PandaPop</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    ) 
  }
}

export default PandaPop