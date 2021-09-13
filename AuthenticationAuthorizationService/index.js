const express = require("express");
const app = express();
const dotEnv = require("dotenv");
dotEnv.config({path : "/configurations/config.env"});
const databaseConfiguration = require("configurations/databaseConfiguration");
const router = require("./routes/authRoutes");


databaseConfiguration()
    .then(()=>console.log("AuthenticationAuthorization Service Connected To Database"))
    .catch(()=>console.log("AuthenticationAuthorization Service Failed To Connect To Database"));


app.use(express.json());
app.use("/auth",router);


const PORT = 8004 || process.env.PORT;
app.listen(PORT , ()=>console.log(`AuthenticationAuthorization Service Server Started At PORT ${PORT}`));
