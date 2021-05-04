const mongoose = require('mongoose');

var Message = mongoose.model('Message', {
    title: { type: String },
    text: { type: String },

});

module.exports = { Message };
