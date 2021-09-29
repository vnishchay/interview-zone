const express = require("express");
const app = express();
const Server = require("http").createServer(app); 
const dotEnv = require("dotenv");
dotEnv.config({path : "/config/config.env"});
const databaseConfiguration = require("./config/dbconfig")
const router = require("./routes/interviewRoutes");
const authroute = require("./routes/authRoutes")
const socketconnection = require("./controller/sockethandler");
var cors = require('cors');
const verifyToken = require("./middleware/auth");



app.use(cors()) //
app.use(express.json());

app.use("/",authroute);
app.use(verifyToken); 
// socket connection handler  
socketconnection(Server); // if authenticated and  on the create interview page only then turn this on  
// database configuration 
databaseConfiguration()
    .then((e)=>console.log("Interview Service Connected To Database"))
    .catch((e)=>console.log("Interview Service Failed To Connect To Database" + e));


// router not needed to be defined here;
app.use("/",router);
const PORT = 3001 || process.env.PORT;
Server.listen(PORT);