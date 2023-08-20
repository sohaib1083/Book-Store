const BookModel = require("../model/BookModel");

const getBooks = async (req, res, next)=>{
    let books;
    try{
        // fetch books
        books = await BookModel.find();
    }catch(err){
        console.log(err);
    }

    if (!books){
        return res.status(404).json({message:"No book found"})
    }
    return res.status(200).json({books})
}


const addBooks = async (req, res, next)=>{
    const { bookname, description, author, image, price} = req.body;
    let newBook;
        try{
            newBook = new BookModel({
                bookname,
                description,
                author,
                image,
                price
            });
            await newBook.save();
        } catch(err){
            console.log(err);
        }

        if (!newBook){
            return res.status(500).json({message:"unable to add"})
        }
        return res.status(201).json({newBook});
}

const getBookbyId = async (req, res, next)=>{
    let books;
    let id = req.params.id;
    try{
        books = await BookModel.findById(id);
        res.status(200).json({books});
    }catch(err){
        console.log(err);
    }
}

const updateById = async (req, res, next)=>{
    let books;
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    try{
        books = await BookModel.findByIdAndUpdate(id,
            {
                bookname,
                description,
                author,
                image,
                price
            });
            await books.save().then(()=>{
                res.json({books})
            })
    }catch(err){
        console.log(err);
    }
}


const deleteById = async (req, res, next)=>{
    const id = req.params.id;
    try{
        await BookModel
            .findByIdAndDelete(id)
            .then(()=>{res.status(201).json({message:"deleted successfully"})});
    }
    catch(err){
        console.log(err);
    }
}




exports.getBooks = getBooks;
exports.addBooks = addBooks;
exports.getBookbyId = getBookbyId;
exports.updateById = updateById;
exports.deleteById = deleteById;