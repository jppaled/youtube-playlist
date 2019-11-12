import React from 'react';

function List(props) {
    return (
        <div>
            <h2>Videos added</h2>
            <ul>
                {props.list.map((link, index) =>
                <li key={index}>
                    {link} 
                    <button onClick={() => props.handleDeleteVideo(index)}>
                        Delete
                    </button>
                </li>
                )}
            </ul>
            <button onClick={props.handleClear}>Clear</button>
        </div>
    );
}

export default List;