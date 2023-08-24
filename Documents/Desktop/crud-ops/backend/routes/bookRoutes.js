const router = require("express").Router();
const bookModel = require("../models/bookModel");


// post request
router.post("/add", async (req, res)=>{
    try {
        const data = req.body; //console se data uthana
        const newbook = new bookModel(data);  //  create new book
        await newbook.save().then(()=>{
            res.status(200).json({"message":"Book Added Successfully"})
        });

    } catch (error) {
        console.log(error);
    }
})      

// get book
router.get("/getBooks", async (req, res)=>{
    try {
        let books;
        books = await bookModel.find();
        res.status(200).json({ books })
    } catch (error) {
        console.log(error);
    }
})

// get book by id
router.get("/getBooks/:id", async (req, res)=>{
    let id = req.params.id;
    const {bookname, description, author, image, price} = req.body;
    let books;
    try {
        books = await bookModel.findByIdAndUpdate(id, {bookname, description, author, image, price});
        await books.save().then(()=>{
            res.send(200).json({"message": "data updated successfully"})
        })
    } catch (error) {
        console.log(error);
    }
})

// update book by id 
router.put("/updateBook/:id", async (req, res)=>{
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    let books;
    try {
        books = await bookModel.findByIdAndUpdate(id, {bookname, description, author, image, price});
        await books.save().then(()=>{
            res.status(201).json({"message": "data updated successfully"})
        })
    } catch (error) {
        console.log(error);
    }
})

//delete by id
router.delete("/deleteBook/:id", async (req, res)=>{
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id)
        .then(()=>{
            res.status(201).json({"message": "data deleted successfully"})
        })
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;