const {Router} = require("express")
const router = Router();
const {
    createComplaints,
    getAllComplaints,
    getComplaints,
    updateComplaints,
    deleteComplaints
    } = require("../controller/complaints.controller")

router.post("/complaints",createComplaints)
router.get("/",getAllComplaints)
router.get("/:complaintId",getComplaints)
router.patch("/:complaintId",updateComplaints)
router.delete("/:complaintId",deleteComplaints)

module.exports.complaintsRouter = router;