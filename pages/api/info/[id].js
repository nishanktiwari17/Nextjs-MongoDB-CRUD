import nextConnect from "next-connect";
var Admission = require("../../../models/model");
import dbConnect from "../../../utils/dbConnect"
const handler = nextConnect();

dbConnect();

handler.get((req,res) => {
    const { query: { id } } = req;
    Admission.findById(id, (err,data) => {
        if(err){
            return res.status(400).json({error: false})
        } else {
        return res.status(200).json({data : data});
        }
    })
});

handler.put((req,res) => {
    const { query: { id } } = req;
    const { Firstname, Lastname, Address, FatherFullName, MotherFullName, RollNo, Standard, Hobbies} = req.body;
    Admission.findByIdAndUpdate(id,{ $set: {Firstname, Lastname, Address, FatherFullName, MotherFullName, RollNo, Standard, Hobbies} }, (err,data) => {
        if(err){
            return res.status(400).json({error: true})
        } else {
            return res.status(200).json({success: true, data: data})
        }
    } )
});

handler.delete((req,res) => {
    const { query: { id } } = req;
    Admission.deleteOne({_id: id}, (err,success) => {
        if(err){
            return res.status(400).json({error: true})
        } else {
            return res.status(200).json({success: `Data with id ${id} deleted successfully`})
        }
    })
})

export default handler;

