import axios from 'axios'

export default axios.create({
  baseUrl: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: process.env.PANDAPOP_YOUTUBE_API_KEY
  }
})