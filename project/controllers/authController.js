const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const existingUser = await User.findOne({
        email: req.body.email
    });

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const user = await User.create({
        email: req.body.email,
        password: hashedPassword
    })

    res.json(user);
}

const login = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    })

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const isMatch = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if (!isMatch) {
        return res.status(401).json({
            message: "invalid password"
        })
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        "secretkey",
        {
            expiresIn: "1h"
        }
    );

    console.log("token was created");

    res.json({ token });
}

module.exports = { login, register };
