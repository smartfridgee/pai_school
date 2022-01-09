import React from 'react';
import { websocket } from './../../websocket';

class Message extends React.Component
{
    constructor(props){
        super(props);
    }

    handleOnMessage = (message) => {
        console.log(message.data);
    }

    componentDidMount(){
        websocket.addEventListener('message', this.handleOnMessage);
    }

    componentWillUnmount(){
        websocket.removeEventListener('message', this.handleOnMessage);
    }

    render = () => {
        return (
        <h1></h1>
        );
    }
}

export default Message;