import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function Clear(props) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose() {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen} variant="contained" color="secondary">
                clear playlist
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Clear the entire playlist ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This will result in the deletion of all videos you have added manually. 
                        Starting all over again can be quite long and frustrating.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        no !
                    </Button>
                    <Button onClick={props.clear} color="secondary" autoFocus>
                        clear
                    </Button>
                </DialogActions>
            </Dialog>
        </div>       
    );
}
