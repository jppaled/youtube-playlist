import axios from 'axios';
const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getVideoInfo = async function getVideoInfo(id) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
            part: "snippet",
            id: id,
            key: KEY
        }
    })
    
    return response.data.items
}

export const getChannelInfo = async function getChannelInfo(id) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
        params: {
            part: "snippet",
            id: id,
            key: KEY
        }
    })
    
    return response.data.items
}

export const getVideosFromPlaylist = async function getVideosFromPlaylist(id) {
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

export const getYoutubeId = function getYoutubeId(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : false;
}