import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true
        },
        learningStyle: {
            type: String,
            default: 'Visual'
        },
        class: {
            type: String,
        }
    }
)

export const User = mongoose.model('user', userSchema);