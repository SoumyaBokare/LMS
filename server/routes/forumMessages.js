const express = require('express');
const router = express.Router();
const ForumMessage = require('../models/ForumMessage');

// Get all forum messages
router.get('/', async (req, res) => {
    try {
        const messages = await ForumMessage.find().sort({ date: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new forum message
router.post('/', async (req, res) => {
    const message = new ForumMessage({
        username: req.body.username,
        message: req.body.message
    });

    try {
        const newMessage = await message.save();
        res.status(201).json(newMessage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;