import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {io} from 'socket.io-client'

const sock = io("http://localhost:3001");
sock.on('connection', ()=>{
  console.log("connected")
})
export default sock;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
