const mongoose = require("mongoose");

const AdmissionSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: [true, 'Please Enter Full Name'],
        unique: true,
        trim: true,
    },
    Lastname: {
        type: String,
        required: [true, 'Please Enter Full Name'],
        unique: true,
        trim: true,
    },
    Address: {
        type: String,
        required: true,
        maxlength: [200, 'Address cannot be more than 60 characters']
    },
    FatherFullName: {
        type: String,
        required: [true, "Please Enter Father's Full Name"]
    },
    MotherFullName: {
        type: String,
        required: [true, "Please Enter Mother's Full Name"]
    },
    RollNo: {
        type: Number,
        required: true
    },
    Standard: {
        type: String,
        required: true
    },
    Hobbies: {
        type: String,
    }

});

module.exports = mongoose.models.Admission || mongoose.model("Admission", AdmissionSchema);

