import React from 'react';
import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, Fab, makeStyles } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    videoCard: {
        width: "320px",
        height: "340px",
        "&:hover": {
            boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
        },
    },
    videoThumbnail: {
        maxWidth: "320px",
        maxHeight: "180px"
    },
    avatar: {
        maxWidth: "30px",
        maxHeight: "30px"
    }
}));

function Video(props) {
    const classes = useStyles();
    
    return (
        <Card className={classes.videoCard}>
            <CardHeader
                avatar={
                    <Avatar 
                        className={classes.avatar} 
                        aria-label="channel"
                        src={props.channelInfos && props.channelInfos.snippet.thumbnails.default.url}
                    > 
                        {props.videoInfos.channelTitle[0]} 
                    </Avatar>
                }
                action={props.deleteVideo && (
                        <Fab
                        onClick={() => props.deleteVideo(props.id)}
                        color="secondary"
                        aria-label="delete"
                        size="small"
                    >
                        <Delete />
                    </Fab>
                )}
                title={props.videoInfos.channelTitle}
            >
            </CardHeader>
            <CardActionArea onClick={() => window.location = `https://www.youtube.com/watch?v=${props.id}`}>
                <CardMedia
                    component="img"
                    image={props.videoInfos.thumbnails.medium.url}
                    className={classes.videoThumbnail}
                />
            </CardActionArea>
            <CardContent>
                {props.videoInfos.title}
            </CardContent>
        </Card>
    );
}

export default Video;