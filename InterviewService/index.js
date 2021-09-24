const express = require("express");
const app = express();
const Server = require("http").createServer(app); 


const io = require("socket.io")(Server, {
    cors : {
        origin: "http://localhost:3000", 
        methods: ["GET, POST"], 
    }
})

const dotEnv = require("dotenv");

dotEnv.config({path : "/config/config.env"});
const databaseConfiguration = require("./config/dbconfig")
const router = require("./routes/interviewRoutes");
const { connection } = require("mongoose");

 // socket part here ________________

io.on("connection", socket => {
   console.log("connected to socket 1")
   socket.on('get-document', documentID =>{
     const data = ""
     socket.join(documentID)
     socket.emit('load-document', data)
     socket.on('send-changes', (delta)=>{
     console.log(delta)
     socket.broadcast.to(documentID).emit('recv-changes', delta)
   })
  }) 
  socket.on('chat-room', chatID =>{
    console.log("connected to socket" + chatID)
     socket.join(chatID)
     console.log('joinded chat id', chatID)
     socket.on('NEW_CHAT_MESSAGE_EVENT', message =>{
       console.log("NEW MESSAGE EVENT CALLEED")
       socket.broadcast.to(chatID).emit('get-message', message);
       console.log(message) 
     })
  })

  socket.on('video-call', videoID =>{
      socket.join(videoID)

      socket.on("callUser", (data) => {
        console.log("call user")
        socket.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from})
      })
      socket.on("audiocallUser", (data) => {
      console.log("audio call user")
      socket.to(data.userToCall).emit("audiocallUser", { signal: data.signalData, from: data.from})
      })
      socket.on("answerCall", (data) => {
        console.log("answer call ")
        socket.to(data.to).emit("callAccepted", data.signal)
      })

  })
})

// database connection 

 
databaseConfiguration()
    .then((e)=>console.log("Interview Service Connected To Database"))
    .catch((e)=>console.log("Interview Service Failed To Connect To Database" + e));

// router not needed to be defined here;
app.use(express.json());
app.use("/interview",router);

const PORT = 3001 || process.env.PORT;

Server.listen(PORT);