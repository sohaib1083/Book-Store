
// express functionalities
const express = require("express");
const app = express();

const cors = require('cors');



// connect db with mongoose
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://admin:Karachi12345@crud-ops.1jigoxk.mongodb.net/crudop?retryWrites=true&w=majority"
).then(()=>{
    console.log("connected to DB");
}).then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err))



// routing

const BookRoute = require("./route/BookRoute")


app.use(express.json());
app.use(cors());
app.use("/books", BookRoute);

