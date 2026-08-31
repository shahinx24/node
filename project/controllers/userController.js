const User = require("../models/User")
const bcrypt = require("bcrypt")

const createUser = async (req,res)=> {
    try {
        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        );

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        res.status(201).json(user);
    }catch (error) {
        console.log(error);
        res.ststus(500).json({
            message: error.message
        });
    }
}

const getUser = async (req,res)=> {
    try{
        console.log("data avilable now")
        const user = await User.find()
        re.status(200).json(user);
    }catch (error) {
        console.log(error)
        re.status(500).json({
            message: error.message
        })
    }
}

module.exports = { createUser,getUser}