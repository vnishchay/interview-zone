const mongoose = require("mongoose");
require('dotenv').config(); 

const connection = async ()=>{
    await mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        // useCreateIndex:true,
        useUnifiedTopology:true,
        // useFindAndModify:false,
    });
}

module.exports = connection;