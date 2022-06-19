const mongoose = require("mongoose")


const AddAdminUserSchema = new mongoose.Schema({

    userName :{
        type:String,
    },

    FirstName :{
        type:String,

    },
    LastName:{
        type:String,

    },
    Email:{
        type:String,

    }
    

},

);

const AddAdminUser = mongoose.model("AddAdminUser",AddAdminUserSchema);

module.exports=AddAdminUser;