import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app.jsx';

global.window.onload = () => {
  const $container = document.querySelector('#container');
  ReactDOM.render(<App/>, $container);
};
