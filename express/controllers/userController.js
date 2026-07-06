const bcrypt = require("bcrypt")
const User = require("../module/User")

const createUser = async (req,res)=> {
    try{
        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        )

        const user = await User.create({
            name : req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        console.log("User Added")
        res.status(201).json(user)
    }catch (error){
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const getUser = async (req,res)=> {
    try{
        const user = await User.find()
        res.status(200).json(user)
        console.log("Data found")
    }catch (error){
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const updateUser = async (req,res)=> {
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,

            {returnDocument: "after"}
        )
        console.log("User updated")
        res.status(200).json(user)
    }catch (error){
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteUser = async (req,res)=> {
    try{
        const user = await User.findByIdAndDelete( req.params.id )
        

        if(!user){
            console.log("user not found")
        }
console.log("User deleted")
        res.status(200).json(user)
    }catch (error){
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = { createUser, updateUser, getUser, deleteUser}