import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Fab, Grid } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function List(props) {
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {props.playlist.map((video) =>
                        <Grid item key={video.id}>
                            <Card className={"videoCard"}>
                                <CardHeader
                                    avatar={
                                        <Avatar 
                                            className="avatar" 
                                            aria-label="channel"
                                            src={video.snippet.channelInfos && video.snippet.channelInfos.snippet.thumbnails.default.url}
                                        > 
                                            {video.snippet.channelTitle[0]} 
                                        </Avatar>
                                    }
                                    action={
                                        <Fab
                                            onClick={() => props.handleDeleteVideo(video.id)}
                                            color="secondary"
                                            aria-label="delete"
                                            size="small"
                                        >
                                            <Delete />
                                        </Fab>
                                    }
                                    title={video.snippet.channelTitle}
                                >
                                </CardHeader>
                                <CardMedia
                                    component="img"
                                    image={video.snippet.thumbnails.medium.url}
                                    className="videoThumbnail"
                                />
                                <CardContent>
                                    {video.snippet.title}
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default List;