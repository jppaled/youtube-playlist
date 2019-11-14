import React from 'react';
import { Typography } from '@material-ui/core';

export default function Header(props) {
    return (
        <div>
            <Typography variant="h2">Youtube-search</Typography>
            <Typography>
                Search a Youtube video
            </Typography>
        </div>
    );
}
