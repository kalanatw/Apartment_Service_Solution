const Complaints = require("../models/complaints")

const createComplaints = async (req,res)=>{
    const complaints = new Complaints({
        ...req.body
    })

    try {
        await complaints.save();
        res.send(complaints)
    } catch (error) {
       console.log(error)
    }
}


const getAllComplaints= async (req,res)=>{
    try {
        const complaints = await Complaints.find();
        res.send(complaints)
    } catch (error) {
       console.log(error)
    }
}


const getComplaints = async (req,res)=>{
    const complaintId = req.params.complaintId;
    try {
        const complaints = await Complaints.findById(complaintId);
        res.send(complaints)
    } catch (error) {
       console.log(error)
    }
}


const updateComplaints= async (req,res)=>{
    const complaintId = req.params.complaintId;
    const updates = req.body;
    try {
        const complaints = await Complaints.findByIdAndUpdate(complaintId,{...updates},{new:true});
        res.send(complaints)
    } catch (error) {
       console.log(error)
    }
}


const deleteComplaints = async (req,res)=>{
    const complaintId = req.params.complaintId;
    try {
        const complaints = await Complaints.findByIdAndDelete(complaintId)
        res.send(complaints)
    } catch (error) {
       console.log(error)
    }
}


module.exports ={
    createComplaints,
    getAllComplaints,
    getComplaints,
    updateComplaints,
    deleteComplaints
}