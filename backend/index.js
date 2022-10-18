import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'


const app=express();

app.use('/posts',postRoutes)

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//mongodb://localhost:27017

const MONGO_URI="mongodb://localhost:27017/Memories"
const PORT=process.env.PORT || 5000

mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT,()=>{console.log(`Server is running on Port ${PORT}`)})
})
.catch((error)=>{
    console.log(error.message);
})

// mongoose.set("useFindAndModify",false);