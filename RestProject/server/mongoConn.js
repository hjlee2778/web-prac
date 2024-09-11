const mongoose = require('mongoose');

// MongoDB 연결 설정
const mongoURI = 'mongodb+srv://admin1:1234@cluster0.jwglc.mongodb.net/bookDB?retryWrites=true&w=majority'

const connectDB = () => {
    return mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    });
};

module.exports = connectDB;