import React from 'react';
import { Grid } from '@material-ui/core';
import Video from './Video'
import { getVideoId } from '../utils';

export default function List(props) {
    const { justify, handleDeleteVideo, playlist } = props;

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
