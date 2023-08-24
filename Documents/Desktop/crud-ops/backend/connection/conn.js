const mongoose = require("mongoose");

// password: Karachi12345
mongoose.connect("mongodb+srv://admin:Karachi12345@crud-ops.1jigoxk.mongodb.net/crudop?retryWrites=true&w=majority").then(()=>{
    console.log("connected to DB");
})