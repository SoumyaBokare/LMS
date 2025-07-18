const mongoose = require('mongoose');

const StudentInfoSchema = new mongoose.Schema({
    username: { type: String, required: true },
    rollNumber: { type: String, required: true },
    year: { type: String, required: true },
    branch: { type: String, required: true },
    batch: { type: String, required: true },
    gpa: { type: Map, of: Number, required: true } // Store GPA as a map of semester to GPA
});

module.exports = mongoose.model('StudentInfo', StudentInfoSchema);