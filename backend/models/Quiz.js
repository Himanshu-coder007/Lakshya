import mongoose from "mongoose";

const quizSchema = mongoose.Schema(
    {
        subjectName: {
            type: String,
            required: true
        },
        class: {
            type: String,
            required: true
        },
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
        marks: {
            type: String,
            required: true
        }
    }
)

export const Quiz = mongoose.model('quiz', quizSchema);