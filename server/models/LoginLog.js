const mongoose = require('mongoose');

const LoginLogSchema = new mongoose.Schema({
    username: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LoginLog', LoginLogSchema);