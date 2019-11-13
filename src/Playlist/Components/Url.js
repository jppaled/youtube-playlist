import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import Notification from './Notification';

class Url extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notification: {},
            openNotification: false    
        }

        this.copyCodeToClipboard = this.copyCodeToClipboard.bind(this);
        this.handleOpenNotification = this.handleOpenNotification.bind(this);
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
    }

    copyCodeToClipboard(url) {
        navigator.clipboard.writeText(url)
        
        this.setState({ 
            notification: this.props.handleCreateNotification("Copied!", "success"), 
        }, this.handleOpenNotification)
    }

    handleOpenNotification() {
        this.setState({ openNotification: true });
    }

    handleCloseNotification() {
        this.setState({ openNotification: false });
    }

    render() {
        const {notification, openNotification} = this.state;

        let url = `http://www.youtube.com/watch_videos?video_ids=${this.props.playlist.map((video) => `${video.id},`)}`;

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
                        onClick={() => this.copyCodeToClipboard(url)}>Copy
                    </Button>
                </Grid>
                <Grid item>
                    <Notification 
                        notification={notification} 
                        open={openNotification} 
                        handleClose={this.handleCloseNotification}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default Url;