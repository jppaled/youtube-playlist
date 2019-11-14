import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default function NotFound(props) {
    return (
        <Grid container justify="center">
            <Grid item>
                <Typography variant="h1">404 not found</Typography>
            </Grid>
        </Grid>
    );
}
