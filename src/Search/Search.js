import React from 'react';
import { Grid } from '@material-ui/core';
import { Header, SearchBar } from './Components';
import { List } from '../Components'
import { formatVideosInfos, getVideosBySearch } from '../Utils/youtube';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResult: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async (search, callBack) => {
        let videos = await getVideosBySearch(search);
        let res = await formatVideosInfos(videos);

        this.setState({ searchResult: res })

        callBack();
    }

    render() {
        const { searchResult } = this.state;
        
        return (
            <Grid container direction="column">
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Header />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item>
                            <SearchBar 
                                handleSubmit={this.handleSubmit}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <List 
                                playlist={searchResult} 
                                justify="center"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Search;
