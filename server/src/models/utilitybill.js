const mongoose = require("mongoose")

const utilityBillSchema = new mongoose.Schema({
    ResidentID :{
        type:String,
    },
    ResidentName:{
        type:String,
    },
    EnterBillAmount:{
        type:Number,
    },
    EnterBillMonth :{
        type:Date,
    },
    EnterBillType:{
        type:String,
    },
    EnterBillID:{
        type:Number,
    },
    /*PaidAmount:{
        type:Number,
    },*/
  
})

const UtilityBill = mongoose.model("UtilityBills",utilityBillSchema);

module.exports=UtilityBill;