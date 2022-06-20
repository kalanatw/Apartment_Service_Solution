const {Router} = require("express")
const router = Router();
const {

    createResidentUser,
    getAllResidents,
    getResidentUser,
    updateResidnetUser,
    deleteResidentUser

    } = require("../controller/residentregistration.controller")

router.post("/ResidentUser",createResidentUser)
router.get("/",getAllResidents)
router.get("/:ResidentUserId",getResidentUser)
router.patch("/:ResidentUserd",updateResidnetUser)
router.delete("/:ResidentUserId",deleteResidentUser)

module.exports.ResidentUserRouter = router;
