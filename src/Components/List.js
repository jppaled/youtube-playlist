import React from 'react';
import { Grid } from '@material-ui/core';
import Video from './Video'

function List(props) {
    const getVideoId = (video) => {
        if(video && video.id) {
            if (typeof(video.id) === "string") {
                return video.id
            } else if (video.id.videoId) {
                return video.id.videoId;
            } else {
                return '';
            }
        } else return '';
    };

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justify={props.justify ? props.justify : "flex-start"}
                    alignItems="flex-start"
                    spacing={2}
                >
                    {props.playlist.map((video, index) => 
                        <Grid item key={index}>
                            <Video
                                id={getVideoId(video)}
                                videoInfos={video.snippet}
                                channelInfos={video.snippet.channelInfos}
                                deleteVideo={props.handleDeleteVideo && props.handleDeleteVideo}
                            />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default List;