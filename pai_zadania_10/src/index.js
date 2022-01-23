import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { history } from './utilities';
import Application from './application';

ReactDOM.render(
  <Router history={history}>
    <Application />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals