import express from "express";
import Grade from '../models/grades.js'

const router = express.Router();

//get routes for grades
router.get('/', async (req, res) => {
    const results = await Grade.find({}).limit(10);
    res.send(results).status(200);
});

export default router;