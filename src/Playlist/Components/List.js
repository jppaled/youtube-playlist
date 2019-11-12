import React from 'react';

function List(props) {
    return (
        <div>
            <h2>Videos added</h2>
            <ul className={"videoList"}>
                {props.list.map((video) =>
                <li className={"videoElement"} key={video.id}>
                    <img src={video.snippet.thumbnails.default.url} />
                    <div className={"videoInfos"}>
                        <span className={"videoTitle"}>{video.snippet.title}</span>
                        <span className={"channelTitle"}>{video.snippet.channelTitle}</span>
                        <button 
                            onClick={() => props.handleDeleteVideo(video.id)}
                            className={"deleteButton"}
                        >
                            Delete
                        </button>
                    </div>
                </li>
                )}
            </ul>
            <button onClick={props.handleClear}>Clear</button>
        </div>
    );
}

export default List;