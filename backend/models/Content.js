import mongoose, { Mongoose } from "mongoose";

const subjectSchema = mongoose.Schema(
    {
        topicName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        class: {
            type: String,
            required: true
        },
        subjectName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subject',
            required: true
        },
        visualContent: {
            type: String,
            required: true
        },
        auralContent: {
            type: String,
            required: true
        },
        readingContent: {
            type: String,
            required: true
        },
        kinestheticContent: {
            type: String,
            required: true
        }
    }
)

export const Content = mongoose.model('content', subjectSchema);