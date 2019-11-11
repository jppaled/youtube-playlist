import React from 'react';

function Form(props) {
    return (
        <div>
            <h2>Add video</h2>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="link"> Youtube video link:
                    <input
                        type="text"
                        id="link"
                        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        value={props.value}
                        onChange={props.handleChange}
                    />
                </label>
                <input type="submit" value="Add" />
            </form>
        </div>  
    );
}

export default Form;