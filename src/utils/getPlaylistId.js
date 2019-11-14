export const getPlaylistId = function(url) {
    let id = /[&|?]list=([a-zA-Z0-9_-]+)/gi.exec(url)

    return (id && id.length > 0) ? id[1] : false;
}
