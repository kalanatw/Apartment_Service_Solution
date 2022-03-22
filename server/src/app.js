const express = require("express");
require("../db/mongoose")

const {appointmentRouter} = require("./router/appointment.routes")
const {serviceMemberRouter}=require("./router/servicemember.routes")

const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({
    extended:true,
    limit:"50mb"
}))

app.use(express.json())

app.use("/appointment",appointmentRouter)
app.use("/servicemember",serviceMemberRouter)

module.exports = app;

