const express = require("express");
const app = express();
const dotEnv = require("dotenv");
dotEnv.config({path : "/configurations/config.env"});
const databaseConfiguration = require("./configurations/databaseConfiguration");
const router = require("./routes/questionRoute");


databaseConfiguration()
    .then((e)=>console.log("Question Service Connected To Database" + e ))
    .catch((e)=>console.log("Question Service Failed To Connect To Database" + e));

app.use(express.json());
app.use("/",router);

const PORT = 8002 || process.env.PORT;
app.listen(PORT , ()=>console.log(`QuestionService Server Started At PORT ${PORT}`));
