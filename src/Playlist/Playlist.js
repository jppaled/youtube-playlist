import React from 'react';
import { Form, Header, List, Notification, Url } from './Components';
import { getVideoInfo, getYoutubeId } from './Utils/youtube';
import './Playlist.css'

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
        this.handleCheckIfVideoExist = this.handleCheckIfVideoExist.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const youtubeId = getYoutubeId(this.state.value);
        
        let notification = {};

        if (youtubeId) {
            const isAlreadyAdded = this.handleCheckIfVideoExist(youtubeId);
          
            if (!isAlreadyAdded) {
                let infos = await getVideoInfo(youtubeId);
                
                if (infos.length > 0) {
                    this.setState({ list: [...this.state.list, infos[0]] })
                    
                    notification = this.handleCreateNotification("Video added !", "green");
                } else {
                    notification = this.handleCreateNotification("Video did not exist", "red");
                }
            } else {
                notification = this.handleCreateNotification("Video already added !", "red");
            }
        } else {
            notification = this.handleCreateNotification("Not a valid url !", "red");
        }

        this.setState({ 
            value: '',
            notification
        })
    }

    handleClear() {
        this.setState({
            list: [],
            notification: this.handleCreateNotification("Video list cleared !", "green")
        })
    }

    handleCheckIfVideoExist(id) {
        const { list } = this.state;

        for (let i = 0; i < list.length; i++) {
            if(list[i].id === id) {
                return true
            }
        }
    }

    handleCreateNotification(text, color) {
        return { color: color, text: text }
    }

    handleResetNotification() {
        this.setState({ notification: [] });
    }

    handleDeleteVideo(id) {
        const { list } = this.state;

        for (let i = 0; i < list.length; i++) {
            if(list[i].id === id) {
                const index = i;
                
                let newList = [...this.state.list];
        
                newList.splice(index, 1);

                this.setState({ list: newList })
                break;
            }
        }
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