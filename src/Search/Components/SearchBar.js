import React from 'react';
import { CircularProgress, Divider, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 15px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius: '25px',
        marginBottom: '25px'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SearchBar(props) {
    const classes = useStyles();
    const [searchValue, setSearchValue] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    function handleSubmit(event) {
        setLoading(true);
        event.preventDefault();
        props.handleSubmit(searchValue, () => {
            setLoading(false);
        });
    }

    return (
        <Paper 
            component="form" 
            className={classes.root} 
            onSubmit={handleSubmit}
        >
            <InputBase
                className={classes.input}
                placeholder="Search Youtube video"
                inputProps={{ 'aria-label': 'search youtube video' }}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <Divider className={classes.divider} orientation="vertical" />
            {loading ? (
                 <CircularProgress size={30} />
            ) : (
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            )}
        </Paper>
    );
}
