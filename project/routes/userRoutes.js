const express = require("express")
const router = express.Router();
const auth = require('../middleware/auth')

router.get("/profile", auth, (req,res)=>{
    res.json({
        message: "protected route",
        user:req.user
    })
})

const {
        createUser,
        getUser,
} = require("../controllers/userController");

router.post("/", createUser)
router.get("/", getUser)

module.exports = router;
