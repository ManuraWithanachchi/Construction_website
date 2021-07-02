const mongoose = require('mongoose');

const request = new mongoose.Schema({

    toId: {
        type: String,
    },
    fromId: {
        type: String,
    },
    msg: {
        type: String,
    }

})

module.exports = Requests = mongoose.model('requests', request);