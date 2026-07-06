const User = require("../models/User")
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
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
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
    }
}

const getUser = async (req, res) => {
    try {
        console.log("data now available")
        const getUser = await User.find()
        res.status(200).json(getUser);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const getUserId = await User.findById(req.params.id);
        res.status(200).json(getUserId);
        console.log("Data is fetched")
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}
const updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        )

        if (!updateUser) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        res.status(200).json(updateUser);
        console.log("Data is updated")
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(
            req.params.id
        )
         if (!deleteUser) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        console.log("User delete successfuly")
        res.status(200).json(deleteUser);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createUser,
    updateUser,
    getUser,
    getUserById,
    deleteUser
}