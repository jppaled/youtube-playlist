export const getVideoId = function(video) {
    if (video && video.id) {
        if (typeof(video.id) === "string") {
            return video.id
        } else if (video.id.videoId) {
            return video.id.videoId;
        } else {
            return '';
        }
    } else return '';
}