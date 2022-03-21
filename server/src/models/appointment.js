const mongoose = require("mongoose")

const appoinmetSchema = new mongoose.Schema({
    appointmentStatus :{
        type:String,
    },
    appointmentName:{
        type:String,
    },
    appointmentNIC:{
        type:String,
    },
    appointmentDate :{
        type:Date,
    },
    noOfDatesStaying:{
        type:Number,
    },
    mobileNumber:{
        type:Number,
    },
    expireDate :{
        type:Date,
    },
    startDate :{
        type:Date,
    },
    numOfGuest :{
        type:Number,
    },
})

const Appointment = mongoose.model("Appointment",appoinmetSchema);

module.exports=Appointment;