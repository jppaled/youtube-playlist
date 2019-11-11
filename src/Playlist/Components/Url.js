import React from 'react';

class Url extends React.Component {
    constructor(props) {
        super(props);

        this.copyCodeToClipboard = this.copyCodeToClipboard.bind(this);
    }

    copyCodeToClipboard() {
        navigator.clipboard.writeText(this.paragraph.textContent);
        
        alert('Link was past to your clipboard')
    }

    render() {
        let url = `http://www.youtube.com/watch_videos?video_ids=${this.props.list.map((link) => `${link},`)}`;

        return (
            <div>
                <h2>Your URL</h2>
                <a href={url} ref={(paragraph) => this.paragraph = paragraph}>
                   {url}
                </a>
                <br />
                <button onClick={this.copyCodeToClipboard}>Copy</button>
            </div>
        );
    }
}

export default Url;