const express = require("express");
const app = express();
const dotEnv = require("dotenv");
dotEnv.config({path : "/configurations/config.env"});
const databaseConfiguration = require("configurations/databaseConfiguration");
const router = require("./routes/questionRoute");


databaseConfiguration()
    .then(()=>console.log("Question Service Connected To Database"))
    .catch(()=>console.log("Question Service Failed To Connect To Database"));

app.use(express.json());
app.use("/question",router);

const PORT = 8002 || process.env.PORT;
app.listen(PORT , ()=>console.log(`QuestionService Server Started At PORT ${PORT}`));
