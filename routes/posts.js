import express from "express";
import POST from '../models/posts.js'

const router = express.Router();

//get routes for posts
router.get('/', async (req, res) => {
    const results = await POST.find({}).limit(10);
    res.send(results).status(200);
});

//POST routes for post
router.post("/", async (req,res) => {
    try {
        const result = await POST.create({
            body: req.body.body,
            permalink:req.body.permalink,
            author: req.body.author, 
            title: req.body.title
        })
    console.log(result)
    res.send(result)
    } catch(e) {
        console.log(e)
    }
});

export default router;