import React from 'react';
import { Form, Header, List, Notification, Url } from './Components';

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
        this.handleResetNotification = this.handleResetNotification.bind(this);
        this.handleDeleteVideo = this.handleDeleteVideo.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const youtubeId = this.getYoutubeId(this.state.value);
        
        if (youtubeId) {
            const isAlreadyAdded = this.state.list.includes(youtubeId);
            
            if (!isAlreadyAdded) {
                this.setState({
                    list: [...this.state.list, youtubeId],
                    notification: this.handleCreateNotification("Video added !", "green")
                })
            } else {
                this.setState({ notification: this.handleCreateNotification("Video already added !", "red") })
            }
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

    handleResetNotification() {
       
        this.setState({ notification: [] });
    }

    handleDeleteVideo(index) {
        let newList = [...this.state.list];
        
        newList.splice(index, 1);

        this.setState({ list: newList })
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
                    handleResetNotification={this.handleResetNotification}
                />
                <Notification notification={notification} />
                <List 
                    list={list} 
                    handleClear={this.handleClear}
                    handleDeleteVideo={this.handleDeleteVideo}
                />
                <Url list={list} />
            </div>
        );
    }
}

export default Playlist;