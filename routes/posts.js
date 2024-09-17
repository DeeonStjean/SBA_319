import express from "express";
import POST from '../models/posts.js'
import { ObjectId } from 'mongodb';

const router = express.Router();

//get routes for posts
router.get('/', async (req, res) => {
    const results = await POST.find({}).limit(10);
    res.send(results).status(200);
});

//pout route for post
router.post("/", async (req,res) => {
    try {
        const result = await POST.create({
            body: req.body.body,
            permalink:req.body.permalink,
            author: req.body.author, 
            title: req.body.title
        })
    console.log(result);
    res.send(result);
    } catch(e) {
        console.log(e);
    }
});

//delete route for post
router.delete("/:id", async(req,res) =>{
    try {
       const query = { _id: new ObjectId(req.params.id)}
       let result = await POST.deleteOne(query) ;
       res.send(result).status(200);
    } catch (e) {
      console.log(e);
      res.send(e).status(404);
    }
});

//patch route for post
router.patch("/:id", async(req,res) => {
    try{ 
        const query = { _id: new ObjectId(req.params.id)};
        const result = await POST.updateOne(query, { $set: {author: req.body.author },});
        res.send(result).status(200);
    } catch (e) {
        console.log(e);
        res.send(e).status(404);
    }
});
export default router;