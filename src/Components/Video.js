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

export default function Video(props) {
    const classes = useStyles();
    const { channelInfos, deleteVideo, videoInfos, videoId } = props;

    return (
        <Card className={classes.videoCard}>
            <CardHeader
                avatar={
                    <Avatar 
                        className={classes.avatar} 
                        aria-label="channel"
                        src={channelInfos && channelInfos.snippet.thumbnails && channelInfos.snippet.thumbnails.default.url}
                    > 
                        {videoInfos.channelTitle[0]} 
                    </Avatar>
                }
                action={deleteVideo && (
                    <Fab
                        onClick={() => deleteVideo(videoId)}
                        color="secondary"
                        aria-label="delete"
                        size="small"
                    >
                        <Delete />
                    </Fab>
                )}
                title={videoInfos.channelTitle}
            >
            </CardHeader>
            <CardActionArea onClick={() => window.location = `/player/${videoId}`}>
                <CardMedia
                    component="img"
                    image={videoInfos.thumbnails.medium.url}
                    className={classes.videoThumbnail}
                />
            </CardActionArea>
            <CardContent>
                {videoInfos.title}
            </CardContent>
        </Card>
    );
}
