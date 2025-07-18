const express = require('express');
const router = express.Router();
const LoginLog = require('../models/LoginLog');

// Log a user login
router.post('/', async (req, res) => {
    const loginLog = new LoginLog({
        username: req.body.username
    });

    try {
        const newLoginLog = await loginLog.save();
        res.status(201).json(newLoginLog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;