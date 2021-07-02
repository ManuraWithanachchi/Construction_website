const mongoose = require('mongoose');

const job = new mongoose.Schema({

    userId: {
        type: String,
    },
    jobType: {
        type: String,
    },
    salary: {
        type: Number,
    },
    timeFrame: {
        type: String,
    },
    isAvailable: {
        type: Boolean,
    }

})

module.exports = Jobs = mongoose.model('jobs', job);