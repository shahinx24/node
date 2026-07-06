const express = require('express')
const router = express.Router();

const auth = require('../middleware/auth')

router.get("/profile", auth, (req,res)=>{
    res.json({
        message: "Protected Route",
        user: req.user
    })
})

const {
        createUser,
        getUser,
        getUserById,
        updateUser,
        deleteUser
} = require("../controllers/userController");

router.post("/", createUser)
router.get("/", getUser)
router.get("/:id", getUserById)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router;
