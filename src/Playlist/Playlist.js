import React from 'react';
import { Grid } from '@material-ui/core';
import { Clear, Form, Header, Import, List, Notification, Url } from './Components';
import { getVideoInfo, getYoutubeId, getChannelInfo, getVideosFromPlaylist } from './Utils/youtube';
import './Playlist.css'

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urlInputValue: '',
            playlist: [],
            notification: {},
            openNotification: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleDeleteVideo = this.handleDeleteVideo.bind(this);
        this.handleCheckIfVideoExist = this.handleCheckIfVideoExist.bind(this);
        this.handleOpenNotification = this.handleOpenNotification.bind(this);
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        this.handleImportPlaylist = this.handleImportPlaylist.bind(this);
        this.handleMergeInfos = this.handleMergeInfos.bind(this);
    }

    handleChange(event) {
        this.setState({ urlInputValue: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const youtubeId = getYoutubeId(this.state.urlInputValue);
        
        let notification = {};

        if (youtubeId) {
            const isAlreadyAdded = this.handleCheckIfVideoExist(youtubeId);
          
            if (!isAlreadyAdded) {
                let videoInfos = await getVideoInfo(youtubeId);

                if (videoInfos.length > 0) {
                    let channelInfos = await getChannelInfo(videoInfos[0].snippet.channelId);
                    
                    let finalVideo = this.handleMergeInfos(videoInfos, channelInfos);
                 
                    this.setState({ playlist: [...this.state.playlist, finalVideo] })
                    
                    notification = this.handleCreateNotification("Video added !", "success");
                } else {
                    notification = this.handleCreateNotification("Video does not exist", "error");
                }
            } else {
                notification = this.handleCreateNotification("Video already added !", "error");
            }
        } else {
            notification = this.handleCreateNotification("Not a valid url !", "error");
        }

        this.setState({ 
            urlInputValue: '',
            notification,
        }, this.handleOpenNotification)
    }

    handleClear() {
        this.setState({
            playlist: [],
            notification: this.handleCreateNotification("Playlist cleared !", "success")
        }, this.handleOpenNotification)
    }

    handleCheckIfVideoExist(id) {
        const { playlist } = this.state;

        for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].id === id) {
                return true
            }
        }
    }

    handleCreateNotification(message, color) {
        return { color: color, message: message }
    }

    handleOpenNotification() {
        this.setState({ openNotification: true});
    }

    handleCloseNotification() {
        this.setState({ openNotification: false});
    }
    
    handleDeleteVideo(id) {
        const { playlist } = this.state;

        for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].id === id) {
                const index = i;
                
                let newPlayList = [...this.state.playlist];
        
                newPlayList.splice(index, 1);

                this.setState({ 
                    playlist: newPlayList,
                    notification: this.handleCreateNotification("Video deleted !", "success")
                }, this.handleOpenNotification)
                break;
            }
        }
    }

    handleImportPlaylist = async (id) => {
        let videos = await getVideosFromPlaylist(id);
        let newVideos = []

        for (let video of videos) {
            let videoInfos = await getVideoInfo(video.snippet.resourceId.videoId);
            let channelInfos =  await getChannelInfo(videoInfos[0].snippet.channelId);

            let finalVideo = this.handleMergeInfos(videoInfos, channelInfos);

            newVideos.push(finalVideo);
        }

        if (newVideos.length > 0) {
            this.setState({
                playlist: newVideos,
                notification: this.handleCreateNotification("Playlist was imported !", "success")
            }, this.handleOpenNotification)
        }
    }

    handleMergeInfos(videoInfos, channelInfos) {
        videoInfos[0]["snippet"]["channelInfos"] = channelInfos[0]

        return videoInfos[0];
    };

    render() {
        const {playlist, notification, openNotification, urlInputValue} = this.state;

        return (
            <Grid container className="playlistContainer">
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <Grid item>
                            <Header />
                        </Grid>
                        <Grid item>
                            <Form 
                                urlInputValue={urlInputValue} 
                                handleChange={this.handleChange} 
                                handleSubmit={this.handleSubmit}
                            />
                        </Grid>
                        <Grid item>
                            {playlist.length > 0 ? (
                                <Clear clear={this.handleClear} />
                            ) : (
                                <Import import={this.handleImportPlaylist} />
                            )}
                            </Grid>
                        <Grid item>
                            <List 
                                playlist={playlist} 
                                handleClear={this.handleClear}
                                handleDeleteVideo={this.handleDeleteVideo}
                            />
                        </Grid>
                        <Grid item>
                            {playlist.length > 0 && (
                                <Url 
                                    playlist={playlist} 
                                    handleCreateNotification={this.handleCreateNotification}
                                    handleCloseNotification={this.handleCloseNotification}
                                />
                            )} 
                        </Grid>
                        <Grid item>
                            <Notification 
                                notification={notification} 
                                open={openNotification}
                                handleClose={this.handleCloseNotification}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Playlist;