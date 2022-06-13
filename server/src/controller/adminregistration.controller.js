const AddAdminUser = require("../models/adminregistration");

const createAdminUser = async (req,res)=>{
    const adminUser = new AddAdminUser ({
        ...req.body
    })

    try {
        await adminUser.save();
        res.send(adminUser)
    } catch (error) {
       console.log(error)
    }
}

const getAllAdminUser= async (req,res)=>{
    try {
        const adminUser = await AddAdminUser.find();
        res.send(adminUser)
    } catch (error) {
       console.log(error)
    }
}

const getAdminUser = async (req,res)=>{
    const adminUserId = req.params.adminUserId;
    try {
        const adminUser = await AddAdminUser.findById(adminUserId);
        res.send(adminUser)
    } catch (error) {
       console.log(error)
    }
}

const updateAdminUser= async (req,res)=>{
    const adminUserId = req.params.adminUserId;
    const updates = req.body;
    try {
        const adminUser = await AddAdminUser.findByIdAndUpdate(adminUserId,{...updates},{new:true});
        res.send(adminUser)
    } catch (error) {
       console.log(error)
    }
}

const deleteAdminUser = async (req,res)=>{
    const adminUserId = req.params.adminUserId;
    try {
        const adminUser = await AddAdminUser.findByIdAndDelete(adminUserId)
        res.send(adminUser)
    } catch (error) {
       console.log(error)
    }
}



module.exports ={
    createAdminUser,
    getAllAdminUser,
    getAdminUser,
    updateAdminUser,
    deleteAdminUser
}
