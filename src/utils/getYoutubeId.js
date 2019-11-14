export const getYoutubeId = function(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : false;
}