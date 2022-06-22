/*const UtilityBill = require("../models/utilitybill");

const createutilitybill = async (req,res)=>{
    const utilitybill = new UtilityBill ({
        ...req.body
    })

    try {
        await utilitybill.save();
        res.send(utilitybill)
    } catch (error) {
       console.log(error)
    }
}*/

/*const AddPaidAmount = async (req,res)=>{
    const PaidAmount = new UtilityBill ({
        ...req.body
    })

    try {
        await PaidAmount.save();
        res.send(PaidAmount)
    } catch (error) {
       console.log(error)
    }
}*/

/*const getAllUtilityBill= async (req,res)=>{
    try {
        const utilitybill = await UtilityBill.find();
        res.send(utilitybill)
    } catch (error) {
       console.log(error)
    }


}

const getUtilityBill = async (req,res)=>{
    const utilitybillID = req.params.UtilitybillId;
    try {
        const utilitybill = await UtilityBill.findById(utilitybillID);
        res.send(utilitybill)
    } catch (error) {
       console.log(error)
    }
}

const updateUtilityBill= async (req,res)=>{
    const utilitybillID = req.params.utilitybillID;
    const updates = req.body;
    try {
        const utilitybill = await UtilityBill.findByIdAndUpdate(utilitybillID,{...updates},{new:true});
        res.send(utilitybill)
    } catch (error) {
       console.log(error)
    }
}

const deleteUtilityBill = async (req,res)=>{
    const utilitybillID = req.params.utilitybillID;
    try {
        const utilitybill = await UtilityBill.findByIdAndDelete(utilitybillID)
        res.send(utilitybill)
    } catch (error) {
       console.log(error)
    }
}



module.exports ={
    createutilitybill,
    getAllUtilityBill,
    getUtilityBill,
    updateUtilityBill,
    deleteUtilityBill,
    //AddPaidAmount
}*/


const UtilityBill = require("../models/utilitybill");
const Resident = require("../models/resident");
const mongoose = require("mongoose");

const create = async (req, res) => {
  try {
    const resident = await Resident.findOne({resident_id : req.body.resident_id});
    if (!resident)
      return res
        .status(200)
        .json({ code: 200, success: false, message: "Invalid resident id" });
    const utilityBill = new UtilityBill({
      ...req.body, 
      type : req.body.type.toUpperCase(),
      resident_object_id : req.jwt.sub.id
    });

    const savedUtilityBill = await utilityBill.save();
    return res
      .status(200)
      .json({ code: 200, success: true, data: savedUtilityBill });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

const getAllUtilityBills = async (req, res) => {
  try {
    const utilityBill = await UtilityBill.find();
    res.send(utilityBill);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

const getUtilityBill = async (req, res) => {
  try {
    const utilityBillId = req.params.utilityBillId;

    const utilityBill = await UtilityBill.findById(utilityBillId);
    if (utilityBill) {
      res.status(200).json({
        code: 200,
        success: true,
        data: utilityBill,
        message: "Utility bill is received",
      });
    } else {
      res.status(200).json({
        code: 200,
        success: false,
        data: utilityBill,
        message: "Utility bill is not found",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

const update = async (req, res) => {
  try {
    const utilityBillId = req.params.utilityBillId;
    const updates = req.body;

    const oldUtilityBillId = await UtilityBill.findById(utilityBillId);
    if (!oldUtilityBillId)
      return res.status(200).json({
        code: 200,
        success: false,
        message: "Invalid utility bill id",
      });

    const updatedUtilityBill = await UtilityBill.findByIdAndUpdate(
      utilityBillId,
      { ...updates },
      { new: true }
    );
    return res.status(200).json({
      code: 200,
      success: true,
      data: updatedUtilityBill,
      message: "Complaint Updated Successfully!",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

const deleteUtilityBill = async (req, res) => {
  try {
    const utilityBillId = req.params.utilityBillId;

    const utilityBill = await UtilityBill.findByIdAndDelete(utilityBillId);
    if (utilityBill) {
      res.status(200).json({
        code: 200,
        success: true,
        data: utilityBill,
        message: "Utility bill is received",
      });
    } else {
      res.status(200).json({
        code: 200,
        success: false,
        data: utilityBill,
        message: "Utility bill is not found",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

const getUtilityBillsByResidentId = async (req, res) => {
  try {

    var current_electricity_bill = await UtilityBill.findOne({resident_object_id : req.jwt.sub.id, type : "ELECTRICITY" }).sort({_id:-1}).limit(1);
    var current_water_bill = await UtilityBill.findOne({resident_object_id : req.jwt.sub.id, type : "WATER" }).sort({_id:-1}).limit(1);

    var last_electricity_bill = null;
    if(current_electricity_bill){
      last_electricity_bill = await UtilityBill.findOne({_id: {$lt: current_electricity_bill.id}}).sort({_id: -1 }).limit(1);
    }

    var last_water_bill = null;
    if(current_water_bill){
      last_water_bill = await UtilityBill.findOne({_id: {$lt: current_water_bill.id}}).sort({_id: -1 }).limit(1);
    }
    var total_electricity_bill_amount = await UtilityBill.aggregate([{ $match : { type : "ELECTRICITY" } }, {$group: {_id:null, sum_val:{$sum:"$bill_amount"}}}]);
    var total_water_bill_amount = await UtilityBill.aggregate([{ $match : { type : "WATER" } }, {$group: {_id:null, sum_val:{$sum:"$bill_amount"}}}]);

    var total_electricity_paid_amount = await UtilityBill.aggregate([{ $match : { type : "ELECTRICITY" } }, {$group: {_id:null, sum_val:{$sum:"$paid_amount"}}}]);
    var total_water_paid_amount = await UtilityBill.aggregate([{ $match : { type : "WATER" } }, {$group: {_id:null, sum_val:{$sum:"$paid_amount"}}}]);

    data = {
      current_electricity_bill : current_electricity_bill,
      current_water_bill : current_water_bill,
      last_electricity_bill  : last_electricity_bill,
      last_water_bill : last_water_bill,

      total_electricity_bill_amount : total_electricity_bill_amount,
      total_water_bill_amount : total_water_bill_amount,

      total_electricity_paid_amount : total_electricity_paid_amount,
      total_water_paid_amount : total_water_paid_amount
    }
    
    res.status(200).json({
      code: 200,
      success: true,
      data: data
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

const getPreviousBill = async (req, res) => {
  try {
    const utilityBill = await UtilityBill.findOne({ resident_object_id : req.jwt.sub.id, month : { $regex: req.body.month + '.*' }, type : req.body.type.toUpperCase() }).sort({_id:-1}).limit(1);
    if (utilityBill) {
      res.status(200).json({
        code: 200,
        success: true,
        data: utilityBill,
        message: "Utility bill is received",
      });
    } else {
      res.status(200).json({
        code: 200,
        success: false,
        data: utilityBill,
        message: "Utility bill is not found",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

const viewBill = async (req, res) => {
  try {
    const utilityBill = await UtilityBill.findOne({ resident_id : req.body.resident_id , month : { $regex: req.body.month + '.*' }, type : req.body.type.toUpperCase() }).sort({_id:-1}).limit(1);
    if (utilityBill) {
      res.status(200).json({
        code: 200,
        success: true,
        data: utilityBill,
        message: "Utility bill is received",
      });
    } else {
      res.status(200).json({
        code: 200,
        success: false,
        data: utilityBill,
        message: "Utility bill is not found",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

const addPaidAmount = async (req, res) => {
  try {
    var current_bill = await UtilityBill.findOne({resident_id : req.body.resident_id, type : req.body.type.toUpperCase() }).sort({_id:-1}).limit(1);
    
    if (!current_bill)
      return res.status(200).json({
        code: 200,
        success: false,
        message: "There is no " + req.body.type + "bill",
      });

      const paid_amount = req.body.paid_amount + current_bill.paid_amount
      const updates = {
        paid_amount :paid_amount
      };


    const updatedUtilityBill = await UtilityBill.findByIdAndUpdate(
      current_bill.id,
      { ...updates },
      { new: true }
    );
    return res.status(200).json({
      code: 200,
      success: true,
      data: updatedUtilityBill,
      message: "Paid successfully!",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ code: 500, success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  create,
  getAllUtilityBills,
  getUtilityBill,
  update,
  deleteUtilityBill,
  getUtilityBillsByResidentId,
  getPreviousBill,
  viewBill,
  addPaidAmount
};