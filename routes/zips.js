import express from "express";
import ZIP from '../models/zips.js'

const router = express.Router();

//get routes for zips
router.get('/', async (req, res) => {
    const results = await ZIP.find({}).limit(10);
    res.send(results).status(200);
});

export default router;