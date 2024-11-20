import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book_route.js"
import userRoute from "./route/user.route.js"
import cors from 'cors'

const app = express()

app.use(cors());
app.use(express.json());
dotenv.config()
// const port = 3000
const PORT=process.env.PORT || 4000;

// app.get('/', (req, res) => {
//   res.send(`Hello World! <br> Example app listening on port ${PORT} <br/><b> my name is krishna</b>`)

    
// })

const URI=process.env.MongoDBURI;
// conect to mongo db============
try{
mongoose.connect(URI);
console.log('connected to mongodb');





}catch(error){
console.log('error :- ',error);

}
// difining route
app.use("/book",bookRoute);
app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})