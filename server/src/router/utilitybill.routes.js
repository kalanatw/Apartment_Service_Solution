/*const {Router} = require("express")
const router = Router();
const {
    createutilitybill,
    getAllUtilityBill,
    getUtilityBill,
    updateUtilityBill,
    deleteUtilityBill,
    //AddPaidAmount
    } = require("../controller/utilitybill.controller")

router.post("/addUtilityBill",createutilitybill)
router.get("/",getAllUtilityBill)
router.get("/:UtilitybillId",getUtilityBill)
router.patch("/:UtilitybillId",updateUtilityBill)
router.delete("/:UtilitybillId",deleteUtilityBill)
//router.post("",AddPaidAmount)

module.exports.utilityBillRouter = router;*/

const {Router} = require("express")
const router = Router();
const auth = require('../util/auth');
const { create, getAllUtilityBills, getUtilityBill, update, deleteUtilityBill, getUtilityBillsByResidentId, getPreviousBill, viewBill, addPaidAmount} = require("../controller/utilitybill.controller")

router.post("/create", auth.authMiddleware(["RESIDENT"]), create);
router.get("/",getAllUtilityBills);
router.get("/getUtilityBill/:utilityBillId",getUtilityBill);
router.patch("/:UtilitybillId",update);
router.delete("/:UtilitybillId",deleteUtilityBill);
router.get("/getUtilityBillsByResidentId", auth.authMiddleware(["RESIDENT"]), getUtilityBillsByResidentId);
router.post("/getPreviousBill", auth.authMiddleware(["RESIDENT"]), getPreviousBill);
router.post("/viewBill", viewBill);
router.post("/addPaidAmount", addPaidAmount);

module.exports.utilityBillRouter = router;