import { getChannelInfo } from '../api/youtube';
import { mergeInfos } from './';

export const formatVideosInfos = async function(videos) {
    let formatedVideos = []

    for (let video of videos) {
        let channelInfos = await getChannelInfo(video.snippet.channelId);
        let finalVideo = mergeInfos(video, channelInfos);
        
        formatedVideos.push(finalVideo);
    }

    return formatedVideos;
};
