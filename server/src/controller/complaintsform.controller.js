const CompForm = require("../models/complaintsForm");

const createcompForm = async (req,res)=>{
    const compform = new CompForm ({
        ...req.body
    })

    try {
        await compform.save();
        res.send(compform)
    } catch (error) {
       console.log(error)
    }
}

const getAllCompForm= async (req,res)=>{
    try {
        const compform = await CompForm.find();
        res.send(compform)
    } catch (error) {
       console.log(error)
    }


}

const getCompForm = async (req,res)=>{
    const complaintId = req.params.complaintId;
    try {
        const compform = await CompForm.findById(complaintId);
        res.send(compform)
    } catch (error) {
       console.log(error)
    }
}

const updateCompForm= async (req,res)=>{
    const complaintId = req.params.complaintId;
    const updates = req.body;
    try {
        const compform = await CompForm.findByIdAndUpdate(complaintId,{...updates},{new:true});
        res.send(compform)
    } catch (error) {
       console.log(error)
    }
}

const deleteCompForm = async (req,res)=>{
    const complaintId = req.params.complaintId;
    try {
        const compform = await CompForm.findByIdAndDelete(complaintId)
        res.send(compform)
    } catch (error) {
       console.log(error)
    }
}



module.exports ={
    createcompForm,
    getAllCompForm,
    getCompForm,
    updateCompForm,
    deleteCompForm
}