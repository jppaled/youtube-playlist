export const mergeInfos = function(videoInfos, channelInfos) {
    videoInfos["snippet"]["channelInfos"] = channelInfos[0]

    return videoInfos;
};
