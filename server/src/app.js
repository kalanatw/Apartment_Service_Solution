const express = require("express");
require("../db/mongoose");

const { appointmentRouter } = require("./router/appointment.routes");
const { serviceMemberRouter } = require("./router/servicemember.routes");
const { utilityBillRouter } = require("./router/utilitybill.routes");
const { complaintsRouter } = require("./router/complaints.routes");
const { CompFormRouter } = require("./router/complaintsform.routes");
const bodyParser = require("body-parser");

const app = express();

var cors = require("cors");
app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.use(express.json());

app.use("/appointment", appointmentRouter);
app.use("/servicemember", serviceMemberRouter);
app.use("/utilitybill", utilityBillRouter);
app.use("/complaints", complaintsRouter);
app.use("/compform", CompFormRouter);

module.exports = app;
 