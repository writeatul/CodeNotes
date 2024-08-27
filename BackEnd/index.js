import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors"
import path from "path"
import userRoute from "./route/user.route.js" 


const app = express();

app.use(cors())
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


// connect to mongo
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongo");
} 

catch (error) {
  console.log("error is", error);
}

//defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)

//deployment

if(process.env.NODE_ENV==="production"){
  const dirpath = path.resolve()
  app.use(express.static("FrontEnd/dist"))
  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(dirpath, "FrontEnd", "dist", "index.html"))
  })
}


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
