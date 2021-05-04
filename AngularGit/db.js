const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://App:0000@cluster0.7qmft.mongodb.net/test', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection');
});

module.exports = mongoose;
