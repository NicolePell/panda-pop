import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>You haven't selected a video yet</div>
  }
  return <div>{video.snippet.title}</div>
}

export default VideoDetail