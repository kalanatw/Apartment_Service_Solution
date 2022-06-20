const AddResidentUser = require("../models/residentregistration");

const createResidentUser = async (req,res)=>{
    const residentUser = new AddResidentUser ({
        ...req.body
    })

    try {
        await residentUser.save();
        res.send(residentUser)
    } catch (error) {
       console.log(error)
    }
}

const getAllResidents= async (req,res)=>{
    try {
        const residentUser = await AddResidentUser.find();
        res.send(residentUser)
    } catch (error) {
       console.log(error)
    }
}

const getResidentUser = async (req,res)=>{
    const residentUserId = req.params.residentUserId;
    try {
        const residentUser = await AddResidentUser.findById(residentUserId);
        res.send(residentUser)
    } catch (error) {
       console.log(error)
    }
}

const updateResidnetUser= async (req,res)=>{
    const residentUserId = req.params.residentUserId;
    const updates = req.body;
    try {
        const residentUser = await AddResidentUser.findByIdAndUpdate(residentUserId,{...updates},{new:true});
        res.send(residentUser)
    } catch (error) {
       console.log(error)
    }
}

const deleteResidentUser = async (req,res)=>{
    const residentUserId = req.params.residentUserId;
    try {
        const residentUser = await AddResidentUser.findByIdAndDelete(residentUserId)
        res.send(residentUser)
    } catch (error) {
       console.log(error)
    }
}



module.exports ={
    createResidentUser,
    getAllResidents,
    getResidentUser,
    updateResidnetUser,
    deleteResidentUser
}
