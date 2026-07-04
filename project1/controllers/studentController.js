const Student = require("../model/User")
const bcrypt = require("bcrypt")

const createStudent = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        );

        const student = await Student.create({
            name: req.body.name,
            rollno: req.body.rollno,
            email: req.body.email,
            password: hashedPassword
        });

        res.status(201).json(user)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
}

getStudent = async (req,res) => {
    try{
        console.log("Data now available")
        const student = await Student.find()
        res.status(200).json(user)
    }catch (error){
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

