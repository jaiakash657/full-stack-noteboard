import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5001
const __dirname = path.resolve();

//Middleware - Used for Autentication check
app.use(express.json());

if(process.env.NODE_ENV !== "production") {app.use(cors()); }

app.use((req,res,next)=> {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
});

app.use(rateLimiter);


app.use("/api/notes",notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
    });
}


connectDB().then(()=> {
    app.listen(PORT, ()=> {
    console.log("Port Started in ",PORT);
});
})

