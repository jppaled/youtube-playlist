import React from 'react';
import { Typography } from '@material-ui/core';

function Header(props) {
    return (
        <div>
            <Typography variant="h2">Youtube-search</Typography>
            <Typography>
                Search a Youtube video
            </Typography>
        </div>
    );
}

export default Header;