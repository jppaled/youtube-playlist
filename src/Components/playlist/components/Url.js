import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import Notification from '../../Notification';
import { createNotification } from '../../../utils';

export default function Url (props) {
    const [notification, setNotification] = React.useState({})
    const [openNotification, setOpenNotification] = React.useState(false)

    function copyCodeToClipboard(url) {
        navigator.clipboard.writeText(url)
        
        setNotification(createNotification("Copied!", "success"))
        
        handleOpenNotification()
    }

    function handleOpenNotification() {
        setOpenNotification(true);
    }

    function handleCloseNotification() {
        setOpenNotification(false);
    }

    function createPlaylistUrl(playlist) {
        let baseUrl = "http://www.youtube.com/watch_videos?video_ids="
        
        playlist.forEach(video => {
            baseUrl += `${video.id},`
        });

        return baseUrl;
    }
   
    const playlistUrl = createPlaylistUrl(props.playlist);

    return (
        <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item>
                <TextField 
                    label="Your playlist URL"
                    defaultValue={playlistUrl}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                    className="url"
                />
            </Grid>
            <Grid item>
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={() => copyCodeToClipboard(playlistUrl)}
                >
                    Copy
                </Button>
            </Grid>
            <Grid item>
                <Notification 
                    notification={notification} 
                    open={openNotification} 
                    handleClose={handleCloseNotification}
                />
            </Grid>
        </Grid>
    );
}
