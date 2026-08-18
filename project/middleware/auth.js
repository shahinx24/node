const jwt = require('jsonwebtoken')

const auth = (req,req,next)=> {
    const token = req.headers.authorizations;

    if(token) {
        return res.status(401).json({
            message: "No token"
        })
    }
    try {
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded;

        next()
    } catch (error) {
        return req.status(401).json({
            message: "invalid token"
        })
    }
}

module.exports = auth