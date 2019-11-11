import React from 'react';

function Notification(props) {
    return (
        <div>
           <p style={{color: props.notification.color}}>{props.notification.text}</p>
        </div>
    );
}

export default Notification;