import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import Notification from './Notification';

export default function Url (props) {
    const [notification, setNotification] = React.useState({})
    const [openNotification, setOpenNotification] = React.useState(false)

    function copyCodeToClipboard(url) {
        navigator.clipboard.writeText(url)
        
        setNotification(props.handleCreateNotification("Copied!", "success"))
        
        handleOpenNotification()
    }

    function handleOpenNotification() {
        setOpenNotification(true);
    }

    function handleCloseNotification() {
        setOpenNotification(false);
    }

    let url = `http://www.youtube.com/watch_videos?video_ids=${props.playlist.map((video) => `${video.id},`)}`;

    return (
        <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item>
                <TextField 
                    label="Your playlist URL"
                    defaultValue={url}
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
                    onClick={() => copyCodeToClipboard(url)}
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
