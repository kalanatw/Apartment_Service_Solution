const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({

    userName :{
        type:String,
    },

    password :{
        type:String,

    }
    

},

);

const AddUser = mongoose.model("AddUser",UserSchema);

module.exports=AddUser;