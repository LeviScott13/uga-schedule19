import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Input } from './Input';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('header')
);
ReactDOM.render(
  <React.StrictMode>
    <Input />
  </React.StrictMode>,
  document.getElementById('inputContainer')
);
serviceWorker.unregister();
