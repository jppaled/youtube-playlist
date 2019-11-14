import React from 'react';
import { Grid } from '@material-ui/core';
import Video from './Video'

export default function List(props) {
    const { justify, handleDeleteVideo, playlist } = props;

    function getVideoId(video) {
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
                    justify={justify ? justify : "flex-start"}
                    alignItems="flex-start"
                    spacing={2}
                >
                    {playlist.map((video, index) => 
                        <Grid item key={index}>
                            <Video
                                videoId={getVideoId(video)}
                                videoInfos={video.snippet}
                                channelInfos={video.snippet.channelInfos}
                                deleteVideo={handleDeleteVideo && handleDeleteVideo}
                            />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}
