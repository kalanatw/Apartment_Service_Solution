const mongoose = require("mongoose")


const AddAdminUserSchema = new mongoose.Schema({
    FirstName :{
        type:String,

    },
    LastName:{
        type:String,

    },
    Email:{
        type:String,

    },
    password:{
        type:String,


    },
    EmployeeID :{
        type:String,

    },
    Mobile_number:{
        type:Number,

    },
    Designation:{
        type:String,

    },
    Address :{
        type:String,

    },

},

);

const AddAdminUser = mongoose.model("AddAdminUser",AddAdminUserSchema);

module.exports=AddAdminUser;