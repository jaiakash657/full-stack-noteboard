import express from "express";
import cors from "cors"
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5001

//Middleware - Used for Autentication check
app.use(express.json());

app.use(cors());

app.use((req,res,next)=> {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
});

app.use(rateLimiter);


app.use("/api/notes",notesRoutes);

connectDB().then(()=> {
    app.listen(PORT, ()=> {
    console.log("Port Started in ",PORT);
});
})


