const express=require("express");
const mongoose = require("mongoose");
const app=express();
const router = require('./routes/router'); // Import the router

// Middleware
app.use(express.json()); // For parsing JSON
app.use(express.urlencoded({ extended: true })); // For parsing form data

const cors = require("cors");
// const corsOptions = require("./config/corsoptions");
// app.use(cors(corsOptions));

try{
    mongoose.connect("mongodb://localhost:27017/SelfStudy");
    console.log("Connected to database");
} catch{
    console.log("ERROR");
}


app.get("/",async(req,res)=>{
    res.send("Welcome");
})

app.use("/", router);
// app.use("/",router);

const PORT = process.env.PORT||5000;
app.listen(PORT,()=> console.log(`Server started at port ${PORT}`));
