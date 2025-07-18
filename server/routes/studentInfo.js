const express = require('express');
const router = express.Router();
const StudentInfo = require('../models/StudentInfo');

// Get student info by username
router.get('/:username', async (req, res) => {
    try {
        const studentInfo = await StudentInfo.findOne({ username: req.params.username });
        if (!studentInfo) {
            return res.status(404).json({ message: 'Student info not found' });
        }
        res.json(studentInfo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create or update student info
router.post('/', async (req, res) => {
    const { username, rollNumber, year, branch, batch, gpa } = req.body;

    try {
        let studentInfo = await StudentInfo.findOne({ username });
        if (studentInfo) {
            // Update existing student info
            studentInfo.rollNumber = rollNumber;
            studentInfo.year = year;
            studentInfo.branch = branch;
            studentInfo.batch = batch;
            studentInfo.gpa = gpa;
        } else {
            // Create new student info
            studentInfo = new StudentInfo({ username, rollNumber, year, branch, batch, gpa });
        }

        const savedStudentInfo = await studentInfo.save();
        res.status(201).json(savedStudentInfo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;