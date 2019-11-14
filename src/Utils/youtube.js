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


export const getVideosBySearch = async function getVideosBySearch(search) {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: "snippet",
            q: search,
            maxResults: 15,
            key: KEY
        }
    })
    
    return response.data.items
}

export const getYoutubeId = function getYoutubeId(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : false;
}

export const getPlaylistId = function getPlaylistId(url) {
    let id = /[&|?]list=([a-zA-Z0-9_-]+)/gi.exec(url)

    return (id && id.length > 0) ? id[1] : false;
}

export const formatPlaylist = async function formatPlaylist(id) {
    let videos = await getVideosFromPlaylist(id);
    let newVideosInfos = []

    for (let video of videos) {
        let videoInfos = await getVideoInfo(video.snippet.resourceId.videoId);
       
        newVideosInfos.push(videoInfos[0]);
    }
    
    let formatedVideos = await formatVideosInfos(newVideosInfos);

    return formatedVideos;
}

export const formatVideosInfos = async function formatVideosInfos(videos) {
    let formatedVideos = []

    for (let video of videos) {
        let channelInfos = await getChannelInfo(video.snippet.channelId);
        let finalVideo = mergeInfos(video, channelInfos);
        
        formatedVideos.push(finalVideo);
    }

    return formatedVideos;
};

export const mergeInfos = function mergeInfos(videoInfos, channelInfos) {
    videoInfos["snippet"]["channelInfos"] = channelInfos[0]

    return videoInfos;
};
