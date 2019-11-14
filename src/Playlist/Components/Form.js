import React from 'react';
import {CircularProgress, Fab, Grid, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';

export default function Form(props) {
    const { handleChange, handleSubmit, loading, urlInputValue } = props;
    
    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item>
                    <TextField
                        variant="outlined"
                        label="Youtube video link"
                        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        value={urlInputValue}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                    {loading ? (
                       <CircularProgress size={30} />
                    ) : (
                        <Fab
                            type="submit"
                            color="primary"
                            aria-label="add"
                            size="small"
                        >
                            <Add />
                        </Fab>
                    )}
                </Grid>
            </Grid>
        </form>
    );
}
