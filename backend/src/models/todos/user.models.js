import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    // username: String,
    // email: String,
    // isActive: Boolean,
    // password: String,
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
}, {timestamps: true}
)

export const User = mongoose.model("User", userSchema)