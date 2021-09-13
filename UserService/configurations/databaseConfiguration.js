const mongoose = require("mongoose");

const connection = async ()=>{
    await mongoose.connect(process.env.DATABASE,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
    });
}

module.exports = connection;