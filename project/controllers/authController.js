const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email } = req.body;

    const token = jwt.sign(
        { email },
        "mysecretkey",
        { expiresIn: "1h"}
    );

    res.json({ token });
}

module.exports = { login };