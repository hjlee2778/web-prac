const Book = require("./models/book");

const readBooks = async() => {
    try {
        // 전체 book 데이터 조회
        const books = await Book.find();

        return books;
    } catch (err) {
        console.error("책 조회 오류: ", err);
        throw err;
    }
};

const updateBook = async (bookid, updateData) => {
    try {
      // 기존 책 데이터를 먼저 찾기
      const existingBook = await Book.findOne({ bookid: bookid });
      if (!existingBook) return null; // 책을 찾지 못한 경우 null 반환
      // 기존 데이터와 새 데이터 병합
      const mergedData = { ...existingBook.toObject(), ...updateData };
      const updatedBook = await Book.findByIdAndUpdate(
        existingBook._id,
        mergedData,
        {
          new: true,
          runValidators: true,
        }
      );
      return updatedBook;
    } catch (err) {
      console.error("책 업데이트 오류:", err);
      throw err;
    }
  };

  const createBook = async (bookData) => {
    try {
       const newBook = new Book(bookData);
       // 새로생성된book 문서를데이터베이스에저장
  const savedBook = await newBook.save();
       return savedBook;
    } catch (err) {
       console.error("책생성오류:", err);
       throw err;
    }
   };
   
module.exports = { readBooks, updateBook, createBook };