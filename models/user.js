const mongoose = require("mongoose");

const user = new mongoose.Schema({

        fname: {
            type: String,
        },
        lname: {
            type: String,
        },
        age: {
            type: Number,
        },
        password: {
            type: String,
        },
        type: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        province: {
            type: String,
        },
        email: {
            type: String,
            unique: true
        },
        contactNo: {
            type: String,
        },
    }

);


module.exports = User = mongoose.model('users', user);