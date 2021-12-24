
const socketconnection = (Server) =>{

const io = require("socket.io")(Server, {
        cors : {
            origin: "http://localhost:3000", 
            methods: ["GET, POST"], 
        }
    })
io.on("connection", socket => {
    console.log("Socket connection established ")
    socket.on('get-document', documentID =>{
      const data = ""
      socket.join(documentID)
      socket.emit('load-document', data)
      socket.on('send-changes', (delta)=>{
      socket.broadcast.to(documentID).emit('recv-changes', delta)
    })
   }) 
   socket.on('chat-room', chatID =>{
      socket.join(chatID)
      socket.on('NEW_CHAT_MESSAGE_EVENT', message =>{
      
        socket.broadcast.to(chatID).emit('get-message', message);
       })
   })
   socket.on('video-call', videoID =>{
       socket.join(videoID)
       socket.on("callUser", (data) => {
         socket.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from})
       })
       socket.on("audiocallUser", (data) => {
       socket.to(data.userToCall).emit("audiocallUser", { signal: data.signalData, from: data.from})
       })
       socket.on("answerCall", (data) => {
         socket.to(data.to).emit("callAccepted", data.signal)
       })
 
   })
 })
}
module.exports = socketconnection;  