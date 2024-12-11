const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String  
});

// Define a method if needed
userSchema.statics.createUser = function (userData) {
    return this.create(userData);
};

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;




// hey this is ankit  mishra from Kiet college 


