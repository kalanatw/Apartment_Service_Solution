/*const mongoose = require("mongoose")

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
  
//})

//const UtilityBill = mongoose.model("UtilityBills",utilityBillSchema);

//module.exports=UtilityBill;


/*const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const utilityBillSchema = new mongoose.Schema({
  resident_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  resident_name: {
    type: String,
    required: false,
  },
  month: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  bill_id: {
    type: String,
    required: true,
  },
  bill_amount: {
    type: Number,
    required: false,
    default: 0
  },
  paid_amount: {
    type: Number,
    required: false,
    default: 0
  },
});

const UtilityBill = mongoose.model("utility_bill", utilityBillSchema);

module.exports = UtilityBill;*/

const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const utilityBillSchema = new mongoose.Schema({
  resident_id: {
    type: String,
    required: true,
  },
  resident_object_id: {
    type: Schema.Types.ObjectId,
    ref: "resident",
    required: true,
  },
  resident_name: {
    type: String,
    required: false,
  },
  month: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  bill_id: {
    type: String,
    required: true,
  },
  bill_amount: {
    type: Number,
    required: false,
    default: 0
  },
  paid_amount: {
    type: Number,
    required: false,
    default: 0
  },
});

const UtilityBill = mongoose.model("utility_bill", utilityBillSchema);

module.exports = UtilityBill;