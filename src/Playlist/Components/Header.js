import React from 'react';
import { Typography } from '@material-ui/core';

function Header(props) {
    return (
        <div>
            <Typography variant="h2">Youtube-playlist</Typography>
            <Typography>
                Create youtube playlist without google account
            </Typography>
        </div>
    );
}

export default Header;