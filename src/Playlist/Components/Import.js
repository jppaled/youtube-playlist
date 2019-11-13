import React from 'react';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@material-ui/core';

function Import(props) {
    const [open, setOpen] = React.useState(false);
    const [url, setUrl] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setLoading(false);
    };

    const getPlaylistId = (url) => {
        setLoading(true);
        let id = /[&|\?]list=([a-zA-Z0-9_-]+)/gi.exec(url)
    
        if (id && id.length > 0) {
            return id[1]
        } else {
            setError(true);
            
            return false;
        }
    }
    
    return (
        <div>
            <Button onClick={handleClickOpen} variant="contained" color="primary">
                import playlist
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Import playlist"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Import an existing playlist on youtube. 
                        You can then modify it to create a new playlist.
                    </DialogContentText>
                    <TextField
                        error={error}
                        helperText={error ? "Invalid url" : null}
                        autoFocus
                        margin="dense"
                        id="url"
                        label="Youtube playlist url"
                        type="text"
                        fullWidth
                        value={url}
                        onChange={(event) => setUrl(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button 
                        onClick={handleClose} 
                        color="primary"
                        disabled={loading}
                    >
                        cancel
                    </Button>
                    <Button 
                        onClick={() => props.import(getPlaylistId(url))} 
                        color="primary" 
                        autoFocus
                        disabled={loading}
                    >
                        import
                    </Button>
                    {loading && <CircularProgress size={30} />}
                </DialogActions>
            </Dialog>
        </div>       
    );
}

export default Import;