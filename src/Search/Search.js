import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar } from './Components';
import { Header, List } from '../Components'
import { formatVideosInfos, getVideosBySearch } from '../Utils/youtube';

export default function Search(props) {
    const [searchResult, setsearchResult] = React.useState([])
     
    const handleSubmit = async (search, callBack) => {
        let videos = await getVideosBySearch(search);
        let res = await formatVideosInfos(videos);

        setsearchResult(res);

        callBack();
    }
       
    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container>
                    <Grid item>
                        <Header 
                            title={"Youtube-search"}
                            subtitle={"Search a Youtube video"}
                        />
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item>
                        <SearchBar handleSubmit={handleSubmit} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <List playlist={searchResult} justify="center" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
