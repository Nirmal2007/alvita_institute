const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

    mobile: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    dob: String,

    gender: String,

    qualification: String,

    sector: String,

    city: String,

    state: String,

    message: String,

    createdAt: {
        type: Date,
        default: Date.now,
    },

}, {
    collection: "web_form",
}
);

module.exports = mongoose.model(
    "Admission",
    admissionSchema
);