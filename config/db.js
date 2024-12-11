const mongoose = require('mongoose');

// Replace 'mongodb://0.0.0.0/sign-in' with your MongoDB connection string
const connectionString = 'mongodb://0.0.0.0/sign-in';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.error('Database connection failed:', error);
    });

module.exports = mongoose;
