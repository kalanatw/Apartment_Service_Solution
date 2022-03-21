const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const connection= mongoose.connection;

connection.once("open",()=>{
    console.log("Mongodb connected...")
})