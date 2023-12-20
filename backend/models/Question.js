import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
    {
        subjectName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subject',
            required: true
        },
        topicName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'content',
            required: true
        },
        class: {
            type: String,
            required: true
        },
        thresholdLow: {
            type: String,
            required: true
        },
        thresholdHigh: {
            type: String,
            required: true
        },
        questions: [
            {
                question: {
                    type: String
                },
                options: [{
                    type: String
                }],
                correctOption: {
                    type: String
                }, 
                marks: {
                    type: String
                }
            },
        ],
    }
)

export const Question = mongoose.model('question', questionSchema);