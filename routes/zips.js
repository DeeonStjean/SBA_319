import express from "express";
import ZIP from '../models/zips.js'
import { ObjectId } from 'mongodb';

const router = express.Router();

//get routes for zips
router.get('/', async (req, res) => {
    const results = await ZIP.find({}).limit(10);
    res.send(results).status(200);
});
//post for zips
router.post("/", async (req,res) => {
    try {
        const result = await ZIP.create({
            city: req.body.city,
            zip:req.body.zip,
            loc:{
                x:req.body.x,
                y:req.body.y
            }
        })
    console.log(result);
    res.send(result);
    } catch(e) {
        console.log(e);
    }
});

//delete route for zips
router.delete("/:id", async(req,res) =>{
    try {
       const query = { _id: new ObjectId(req.params.id)}
       let result = await ZIP.deleteOne(query) ;
       res.send(result).status(200);
    } catch (e) {
      console.log(e);
      res.send(e).status(404);
    }
});

export default router;