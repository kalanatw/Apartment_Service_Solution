const mongoose = require("mongoose")


const AddAdminUserSchema = new mongoose.Schema({

    name :{
        type:String,
    },

    email :{
        type:String,

    },
    mobile_number:{
        type:String,

    },
    address:{
        type:String,

    },
    password:{
        type:String,
    }
    

},

);

const AddAdminUser = mongoose.model("AddAdminUser",AddAdminUserSchema);

module.exports=AddAdminUser;