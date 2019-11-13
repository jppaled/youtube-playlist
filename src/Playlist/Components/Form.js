import React from 'react';
import {Fab, Grid, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';

function Form(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item>
                    <TextField
                        variant="outlined"
                        label="Youtube video link"
                        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        value={props.urlInputValue}
                        onChange={props.handleChange}
                    />
                </Grid>
                <Grid item>
                    <Fab
                        type="submit"
                        color="primary"
                        aria-label="add"
                        size="small"
                    >
                        <Add />
                    </Fab>
                </Grid>
            </Grid>
        </form>
    );
}

export default Form;