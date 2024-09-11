const express = require("express");
const { readBooks } = require("../bookService");
const { createBook } = require("../bookService");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const books = await readBooks();
        console.log(books);

        res.json(books);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});


router.put("/:id", async (request, response) => {
    const bookId = request.params.id; // URL 파라미터에서 book ID 가져오기
   console.log("bookId : ", bookId);
    const updateData = request.body;
    try {
    const updatedBook = await updateBook(bookId, updateData);
    if (updatedBook) {
    response.status(200).json(updatedBook); // 성공적으로 업데이트된 문서 반환
   } else {
    response.status(404).json({ message: "책을 찾을 수 없습니다." }); 
   }
    } catch (err) { response.status(500).json({ message: "서버 오류",
    error: err.message }); 
   } 
   });

 
router.post("/", async (request, response) => {
    try {
       const book = await createBook(request.body);
       console.log(book);
       response.status(201).json(book);
    } catch (err) {
       response.status(500).json({ error: err.message });
    }
   });   

module.exports = router;