import mongoose from "mongoose";

const subjectSchema = mongoose.Schema(
    {
        subjectName: {
            type: String,
            required: true
        },
        class: {
            type: String,
            required: true
        }
    }
)

export const Subject = mongoose.model('subject', subjectSchema);