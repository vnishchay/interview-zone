const express = require("express");
const app = express();
const dotEnv = require("dotenv");
dotEnv.config({path : "/configurations/config.env"});
const databaseConfiguration = require("configurations/databaseConfiguration");
const userRoute = require("./routes/userRoutes");


databaseConfiguration()
    .then(()=>console.log("User Service Connected To Database"))
    .catch(()=>console.log("User Service Failed To Connect To Database"));


app.use(express.json());
app.use("/user",userRoute);

const PORT = 8000 || process.env.PORT;
app.listen(PORT , ()=>console.log(`UserService Server Started At PORT ${PORT}`));
