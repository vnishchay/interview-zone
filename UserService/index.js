const express = require("express");
const app = express();
const dotEnv = require("dotenv");
dotEnv.config(); 
const databaseConfiguration = require("./configurations/databaseConfiguration");
const userRoute = require("./routes/userRoutes");


databaseConfiguration()
    .then(()=>console.log("User Service Connected To Database"))
    .catch((e)=>console.log("User Service Failed To Connect To Database" + e));


app.use(express.json());
app.use("/user",userRoute);

const PORT =  process.env.PORT;
app.listen(PORT , ()=>console.log(`UserService Server Started At PORT ${PORT}`));
