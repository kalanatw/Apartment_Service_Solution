const mongoose = require("mongoose")

const utilityBillSchema = new mongoose.Schema({
    ResidentID :{
        type:String,
    },
    ResidentName:{
        type:String,
    },
    EnterBillAmount:{
        type:String,
    },
    EnterBillMonth :{
        type:String,
    },
    EnterBillType:{
        type:String,
    },
    EnterBillID:{
        type:String,
    },
  
})

const UtilityBill = mongoose.model("UtilityBill",utilityBillSchema);

module.exports=UtilityBill;