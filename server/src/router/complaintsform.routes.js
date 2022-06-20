const {Router} = require("express")
const router = Router();
const {
    createcompForm,
    getAllCompForm,
    getCompForm,
    updateCompForm,
    deleteCompForm
    } = require("../controller/complaintsform.controller")

router.post("/Createcompform",createcompForm)
router.get("/",getAllCompForm)
router.get("/:complaintId",getCompForm)
router.patch("/:complaintId",updateCompForm)
router.delete("/:complaintId",deleteCompForm)

module.exports.CompFormRouter = router;