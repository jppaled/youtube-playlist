import React from 'react';

function List(props) {
    return (
        <div>
            <h2>Videos added</h2>
            <ul>
                {props.list.map((link, index) =>
                    <li key={index}>
                        {link}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default List;