import React from 'react';
import ReactDOM from 'react-dom';
import Application from './application'
import { websocket } from './websocket';

websocket.addEventListener('open', () => {
  ReactDOM.render(
      <Application />,
    document.getElementById('root')
  );
});

