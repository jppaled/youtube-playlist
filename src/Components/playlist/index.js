import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Clear, Form, Import, Url } from './components';
import { Header, List, Notification } from '../'
import { getVideoInfo } from '../../api/youtube';
import { createNotification, formatPlaylist, formatVideosInfos, getYoutubeId} from "../../utils";

const useStyles = makeStyles(theme => ({
    playlistContainer: {
        padding: "15px"
    }
}));

export default function Playlist (props) {
    const classes = useStyles();
    const [urlInputValue, setUrlInputValue] = useState('');
    const [playlist, setPlaylist] = useState([]);
    const [notification, setNotification] = useState({});
    const [openNotification, setOpenNotification] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(event) {
        setUrlInputValue(event.target.value);
    }

    async function handleSubmit(event) {
        setLoading(true);

        event.preventDefault();

        const youtubeId = getYoutubeId(urlInputValue);
        
        if (youtubeId) {
            const isAlreadyAdded = handleCheckIfVideoExist(youtubeId);
          
            if (!isAlreadyAdded) {
                let videoInfos = await getVideoInfo(youtubeId);

                if (videoInfos.length > 0) {
                    let videos = await formatVideosInfos(videoInfos);
            
                    setPlaylist((playlist) => [...playlist, videos[0]]);
                    
                    setNotification(createNotification("Video added !", "success"));
                } else {
                    setNotification(createNotification("Video does not exist", "error"));
                }
            } else {
                setNotification(createNotification("Video already added !", "error"));
            }
        } else {
            setNotification(createNotification("Not a valid url !", "error"));
        }

        setUrlInputValue('');
        setLoading(false);
        handleOpenNotification();
    }

    function handleClear() {
        setPlaylist([]);
        setNotification(createNotification("Playlist cleared !", "success"));
        handleOpenNotification();
    }

    function handleCheckIfVideoExist(id) {
        for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].id === id) {
                return true
            }
        }
    }

    function handleOpenNotification() {
        setOpenNotification(true)
    }

    function handleCloseNotification() {
        setOpenNotification(false)
    }
    
    function handleDeleteVideo(id) {
        for (let i = 0; i < playlist.length; i++) {
            if (playlist[i].id === id) {
                const index = i;
                
                let newPlayList = [...playlist];
        
                newPlayList.splice(index, 1);
                
                setPlaylist(newPlayList);
                setNotification(createNotification("Video deleted !", "success"));
                handleOpenNotification();
                break;
            }
        }
    }

    async function handleImportPlaylist(id) {        
        let playlistFormated = await formatPlaylist(id);

        if (playlistFormated.length >= 0) {
            setPlaylist(playlistFormated);
            setNotification(createNotification("Playlist was imported !", "success"));
        } else {
            setPlaylist([]);
            setNotification(createNotification("Error when importing!", "error"));
        }
        
        handleOpenNotification();
    }

    return (
        <Grid container className={classes.playlistContainer}>
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Grid item>
                        <Header 
                            title={"Youtube-playlist"} 
                            subtitle={"Create youtube playlist without google account"}
                        />
                    </Grid>
                    <Grid item>
                        <Form 
                            urlInputValue={urlInputValue} 
                            handleChange={handleChange} 
                            handleSubmit={handleSubmit}
                            loading={loading}
                        />
                    </Grid>
                    <Grid item>
                        {playlist.length > 0 ? (
                            <Clear clear={handleClear} />
                        ) : (
                            <Import import={handleImportPlaylist} />
                        )}
                        </Grid>
                    <Grid item>
                        {playlist.length > 0 && (
                            <List
                                playlist={playlist} 
                                handleDeleteVideo={handleDeleteVideo}
                            />
                        )}
                    </Grid>
                    <Grid item>
                        {playlist.length > 0 && (
                            <Url 
                                playlist={playlist} 
                                handleCloseNotification={handleCloseNotification}
                            />
                        )} 
                    </Grid>
                    <Grid item>
                        <Notification 
                            notification={notification} 
                            open={openNotification}
                            handleClose={handleCloseNotification}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
