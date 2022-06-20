const mongoose = require("mongoose")

const complaintsFormSchema = new mongoose.Schema({
    ComplaintID :{
        type:String,
    },
    Reply:{
        type:String,
    },

    CurrentStatus:{
        type:String,
    },

})

const CompForm = mongoose.model("ComplaintsForm",complaintsFormSchema);

module.exports=CompForm;