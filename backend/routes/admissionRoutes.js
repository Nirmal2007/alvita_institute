const express = require("express");
const Admission = require("../models/Admission");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        console.log("Received Form Data:", req.body);

        const admission = await Admission.create(
            req.body
        );

        res.status(201).json({
            success: true,
            message: "Admission submitted successfully",
            data: admission,
        });
    } catch (err) {
        console.error("POST ERROR:", err);

        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const admissions =
            await Admission.find().sort({
                createdAt: -1,
            });

        res.status(200).json({
            success: true,
            count: admissions.length,
            data: admissions,
        });
    } catch (err) {
        console.error("GET ERROR:", err);

        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

module.exports = router;