import mongoose from "mongoose";

const quizSchema = mongoose.Schema(
    {
        subjectName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subject'
        },
        class: {
            type: String
        },
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        marks: {
            type: String
        },
        hml: {
            type: String
        },
        quizId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'question'
        }
    }
)

export const Quiz = mongoose.model('quiz', quizSchema);