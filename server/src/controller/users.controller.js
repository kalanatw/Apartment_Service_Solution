const AddUser = require("../models/adminregistration");

const registerUser = async (req,res)=>{
    const newUser = new AddUser ({
        ...req.body
    })

    try {
        await newUser.save();
        res.send(newUser)
    } catch (error) {
       console.log(error)
    }
}

const signinUser= async (req,res)=>{
    try {
        const newUser = await AddUser.find();
        res.send(newUser)
    } catch (error) {
       console.log(error)
    }
}


module.exports ={
    registerUser,
    signinUser
}
