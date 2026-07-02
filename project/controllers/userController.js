const User = require("../models/User")
const bcrypt = require("bcrypt");

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
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
};

const getUser = async (req, res) => {
    try {
        console.log("Data now available")
        const user = await User.find()
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
        console.log(`User ${user.name} is fetched`)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        );
        if (!updateUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(updateUser)
        console.log("user is updated")
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if (!deleteUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        console.log("user deleted successfully")
        res.status(200).json({
            message: "Deleted successfully",
            deleteUser
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error)
    }
}

module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}