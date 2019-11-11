import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import List from './Components/List';
import Url from './Components/Url';
import Notification from './Components/Notification';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: [],
            notification: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const youtubeId = this.getYoutubeId(this.state.value);

        if (youtubeId) {
            this.setState({
                list: [...this.state.list, youtubeId],
                notification: this.handleCreateNotification("Video added !", "green")
            })
        } else {
            this.setState({ notification: this.handleCreateNotification("Not a valid url !", "red") })
        }

        this.setState({ value: '' })
    }

    handleClear() {
        this.setState({
            list: [],
            notification: this.handleCreateNotification("Video list cleared !", "green")
        })
    }

    handleCreateNotification(text, color) {
        return { color: color, text: text }
    }

    getYoutubeId(url) {
        url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

        return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_-]/i)[0] : false;
    }

    render() {
        const {list, notification, value} = this.state;

        return (
            <div>
                <Header />
                <Form 
                    value={value} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                />
                <Notification notification={notification} />
                <List list={list} handleClear={this.handleClear} />
                <Url list={list} />
            </div>
        );
    }
}

export default Playlist;