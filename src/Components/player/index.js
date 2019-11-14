import React from 'react';
import { useParams } from "react-router-dom";
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        position: "relative",
        width: "100%",
        height: "0",
        paddingBottom: "55.2%"
    },
    video: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    }
}));

export default function Player(props) {
    const classes = useStyles();
    let { id } = useParams();

    return (
        <Grid container justify="center" className={classes.container}>
            <Grid item>
                <iframe 
                    className={classes.video}
                    src={`https://www.youtube.com/embed/${id}`}
                    frameborder="0"
                    title="youtube-video"
                    allow="accelerometer; 
                    autoplay; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                >
                </iframe>
            </Grid>
        </Grid>
    );
}
