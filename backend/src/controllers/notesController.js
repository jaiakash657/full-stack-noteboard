import Note from "../models/Note.js"

export async function getAllNote(_,res) {
    try {
        const notes=await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch(error) {
        console.error("Error in getAllNotes method");
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function createNote (req,res) {
    try {
        const {title,content} =req.body;
        const note = new Note({title,content});

        const savednote=await note.save();
        res.status(200).json(savednote);
    } catch(error) {
        console.error("Error createNote method");
        res.status(500).json({message:"Internal Server Error in Creation"});
    }
}

export async function updateNote (req,res) {
    try {
        const {title,content}=req.body
       const updatedNote= await Note.findByIdAndUpdate(req.params.id,{title,content},{new :true});

       if(!updatedNote) return res.status(404).json({messge:"Note not found"});
       
       res.status(200).json({messge:"Note updated successfully"});

    } catch(error) {
        console.error("Error in updateNote method");
        res.status(500).json({message:"Internal Server Error in Updation"});
    }
}

export async function deleteNote (req,res) {
    try {
        const deletenote=await Note.findByIdAndDelete(req.params.id);
        if(!deletenote) return res.status(404).json("Not Found Error");

        res.status(200).json({messge:"Deleted Successfully"});
    }catch(error) {
        console.error("Error in deleteNote method");
        res.status(500).json({message:"Internal Server Error in Deletion"});
    }
}

export async function getNoteByID (req,res)  {
    try {
        const note=await Note.findById(req.params.id);
        if(!note) return res.status(404).json({msg:"Node is not found "});
        res.status(200).json(note);
    } catch(error) {
        console.error("Error in getNotesByID method");
        res.status(500).json({message:"Internal Server Error"});
    }
}