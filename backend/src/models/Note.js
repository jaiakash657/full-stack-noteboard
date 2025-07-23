import mongoose from "mongoose";

// 1= creating a schema
//2 = model based on a schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required: true,
        },
        content: {
            type:String,
            required: true,
        },
    },
    {timestamps:true}
);

const Note = mongoose.model("Note",noteSchema);

export default Note