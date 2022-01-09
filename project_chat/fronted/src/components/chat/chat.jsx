import React from 'react';
import Message from './message';
import Panel from './panel';

class Chat extends React.Component
{
    render = () => {
        return (
        <div>
            <Panel></Panel>
            <Message></Message>
        </div>
        );
    }
}

export default Chat;