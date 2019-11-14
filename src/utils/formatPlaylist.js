import { getVideoInfo, getVideosFromPlaylist } from '../api/youtube';
import { formatVideosInfos } from './';

export const formatPlaylist = async function(id) {
    let videos = await getVideosFromPlaylist(id);
    let newVideosInfos = []

    for (let video of videos) {
        let videoInfos = await getVideoInfo(video.snippet.resourceId.videoId);
       
        newVideosInfos.push(videoInfos[0]);
    }
    
    let formatedVideos = await formatVideosInfos(newVideosInfos);

    return formatedVideos;
}