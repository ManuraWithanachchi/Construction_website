const mongoose = require("mongoose");

const URI = 'mongodb+srv://admin:1234@cluster0.lnxui.mongodb.net/CSurvey?retryWrites=true&w=majority';

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    console.log('DB connected ....');
}

module.exports = connectDB;