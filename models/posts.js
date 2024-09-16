import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    body: { type: String, required: true},
    permalink: {type: String, required: true},
    author: {type: String, required: true},
    title: {type: String, required: true},
    tags: [String],
    comments: [
        {
            body: {type: String},
            email: {type: String},
            author: {type: String},
        }
    ],
    date: {type: Date, required: true},
})
export default mongoose.model('posts',postsSchema);