const mongoose = require("mongoose")


const AddResidentUserSchema = new mongoose.Schema({

    name :{
        type:String,
    },

    resident_id :{
        type:String,

    },
    email:{
        type:String,

    },
    block_number:{
        type:String,

    },
    house_number:{
        type:String,
    },
    phone_number:{
        type:String,
    },
    nic:{
        type:String,
    },
    gender:{
        type:String,
    },
    dob:{
        type:Date,
    },
    occupation:{
        type:String,
    },
    password:{
        type:String,
    },
},

);

const AddResidentUser = mongoose.model("AddResidentUser",AddResidentUserSchema);

module.exports=AddResidentUser;