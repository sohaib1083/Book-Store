const router = require("express").Router();
const BookModel = require("../model/BookModel")
const bookController = require("../controller/controller")

// // book add 
router.post("/", bookController.addBooks);

// book get
router.get("/", bookController.getBooks);

// get by id
router.get("/:id", bookController.getBookbyId);


// update with id
router.put("/:id", bookController.updateById);



// delete book by id
router.delete("/:id", bookController.deleteById);



module.exports = router;
