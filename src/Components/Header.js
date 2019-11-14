import React from 'react';
import { Typography } from '@material-ui/core';

export default function Header(props) {
    const { title, subtitle } = props;

    return (
        <div>
            <Typography variant="h2">{title}</Typography>
            <Typography>
                {subtitle}
            </Typography>
        </div>
    );
}
