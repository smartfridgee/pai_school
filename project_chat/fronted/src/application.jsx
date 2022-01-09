import React from 'react';
import Chat from './components/chat/chat';

class Application extends React.Component
{
  render = () => {
    return (
      <div>
          <h1>Hello World!</h1>
          <Chat></Chat>
      </div>
    );
  }
}

export default Application;
