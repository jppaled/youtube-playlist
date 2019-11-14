import axios from 'axios';
const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getVideoInfo = async function(id) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
            part: "snippet",
            id: id,
            key: KEY
        }
    })
    
    return response.data.items
}

export const getChannelInfo = async function(id) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
        params: {
            part: "snippet",
            id: id,
            key: KEY
        }
    })
    
    return response.data.items
}

export const getVideosFromPlaylist = async function(id) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
            part: "snippet",
            playlistId: id,
            maxResults: 50,
            key: KEY
        }
    })
    
    return response.data.items
}

export const getVideosBySearch = async function(search) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: "snippet",
            q: search,
            maxResults: 50,
            type: "video",
            key: KEY
        }
    })
    
    return response.data.items
}