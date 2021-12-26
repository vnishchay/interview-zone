import {io} from 'socket.io-client'

const sock = io("http://localhost:3001");

sock.on('connection', ()=>{
  console.log("socket connection established")
  console.log("connected")
})
export default sock;