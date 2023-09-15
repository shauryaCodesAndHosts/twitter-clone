import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/users.js"
import authRoutes from "./routes/auths.js"
import tweetRoutes from "./routes/tweets.js"
import cookieParser from "cookie-parser";



const app = express();
dotenv.config();

const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(process.env.MONGO)
        .then( () => { 
            console.log("Connect to MongoDB database");
        })
        .catch( (err) => {
            throe.error(err);
        });
};

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);


app.listen(8000, ()=> {
    connect();
    console.log("listening to port 8000");
})