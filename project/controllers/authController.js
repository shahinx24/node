const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const user = await User.create({
        emai: req.body.email,
        password: hashedPassword
    })

    res.json(user);
}

const login = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email
    })

    const isMatch = await bcrypt.compare(
        req.body.password,
        user.password``
    )

    if(!isMatch){
        return res.json({
            message: "invalid password"
        })
    }       

    const token = jwt.sign(
        { id: user._id },
        "secretkey",
        { expiresIn: "1h" }
    );

    res.json({ token });
}

module.exports = { login, register };