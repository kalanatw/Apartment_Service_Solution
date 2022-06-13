const {Router} = require("express")
const router = Router();
const {
    createAdminUser,
    getAllAdminUser ,
    getAdminUser ,
    updateAdminUser ,
    deleteAdminUser
    } = require("../controller/adminregistration.controller")

router.post("/AdminUser",createAdminUser)
router.get("/",getAllAdminUser)
router.get("/:AdminUserId",getAdminUser)
router.patch("/:AdminUserd",updateAdminUser)
router.delete("/:AdminUserId",deleteAdminUser)

module.exports.AdminUserRouter = router;
