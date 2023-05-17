import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    family: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updated_at: {
        type: Date,
        default: () => Date.now(),
    }
});

export default mongoose.model("User", userSchema);