//require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
        app.on("Error", (error) => {
            console.log("App error: ", error);
            throw error;
        })
    })
})
.catch((err) => {
    console.log("MONGO DB connection FAILED!! ", err)
})

/*
//IIFE function
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.error("Error: ", error);
        throw err;
    }

})()
*/