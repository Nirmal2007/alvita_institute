const express = require("express");

const {
    createAdmission,
    getAdmissions,
} = require("../controllers/admissionController");

const router = express.Router();

router.post("/", createAdmission);

router.get("/", getAdmissions);

module.exports = router;