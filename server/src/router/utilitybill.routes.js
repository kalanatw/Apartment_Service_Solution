const {Router} = require("express")
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

module.exports.utilityBillRouter = router;
