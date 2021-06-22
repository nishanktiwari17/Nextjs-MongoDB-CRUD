import nextConnect from "next-connect";
var Admission = require("../../../models/model");
import dbConnect from "../../../utils/dbConnect"
const handler = nextConnect();

dbConnect();

handler.post((req,res) => {
    const {Firstname, Lastname, Address, FatherFullName, MotherFullName, RollNo, Standard, Hobbies} = req.body;
    var student = new Admission({Firstname, Lastname, Address, FatherFullName, MotherFullName, RollNo, Standard, Hobbies})
    student.save((err,response) => {
        if(err){
            res.status(400).json({ success: 'error' })
        } else {
            res.status(200).json({success: true, data: response})
        }
    })

})

export default handler;
