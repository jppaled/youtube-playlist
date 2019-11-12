import React from 'react';
import Notification from './Notification';

class Url extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notification: {}    
        }

        this.copyCodeToClipboard = this.copyCodeToClipboard.bind(this);
    }

    copyCodeToClipboard() {
        navigator.clipboard.writeText(this.paragraph.textContent);
        
        this.setState({ notification: {text: "Copied!", color: "green"} })
    }

    render() {
        let url = `http://www.youtube.com/watch_videos?video_ids=${this.props.list.map((video) => `${video.id},`)}`;

        return (
            <div>
                <h2>Your URL</h2>
                <a href={url} ref={(paragraph) => this.paragraph = paragraph}>
                   {url}
                </a>
                <br />
                <button onClick={this.copyCodeToClipboard}>Copy</button>
                <Notification notification={this.state.notification} />
            </div>
        );
    }
}

export default Url;