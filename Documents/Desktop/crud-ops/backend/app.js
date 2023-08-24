const express = require("express");
const app = express();
const bookRoutes = require("./routes/bookRoutes");
require("./connection/conn");

app.use(express.json());
app.use("/", bookRoutes);




app.listen(1000,()=>{
    console.log("server running on port 1000");
})