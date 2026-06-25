const Admission = require("../models/Admission");

exports.createAdmission = async (
    req,
    res
) => {
    try {
        const admission =
            await Admission.create(req.body);

        res.status(201).json({
            success: true,
            data: admission,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.getAdmissions = async (
    req,
    res
) => {
    try {
        const admissions =
            await Admission.find();

        res.status(200).json({
            success: true,
            data: admissions,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};