const mongoose = require("mongoose");
 const bookInfoSchema = new mongoose.Schema({
  bookid: {
     type: Number,
     required: true,
     unique: true,
  },
  bookname: {
     type: String,
     required: true,
  },
  publisher: {
     type: String,
     required: true,
  },
  price: {
    type: Number,
    required: true,
 },
}, { collection: 'bookInfo' });


// 모델생성
const BookInfo = 
         mongoose.model("BookInfo", bookInfoSchema);


module.exports = BookInfo;