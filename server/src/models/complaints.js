const mongoose = require("mongoose")

const complaintsSchema = new mongoose.Schema({
    ID:{
        type:String,
    },
    Date:{
        type:String,
    },
    Category:{
        type:String,
    },
    Description:{
        type:String,
    },

})

const Complaints = mongoose.model("Complaints",complaintsSchema);

module.exports=Complaints;