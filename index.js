import express from 'express';
import 'dotenv/config';
import connectDb from './data/db.js'
import Grade from './models/grades.js'
import ZIP from './models/zips.js'
import POST from './models/posts.js'

const app = express();
const PORT = 8080;

app.use(express.json());

//get routes for grades
app.get('/grades', async (req, res) => {
    const results = await Grade.find({}).limit(10);
    res.send(results).status(200);
});
//get routes for posts
app.get('/posts', async (req, res) => {
    const results = await POST.find({}).limit(10);
    res.send(results).status(200);
});
//get routes for ZIPS
app.get('/zips', async (req, res) => {
    const results = await ZIP.find({}).limit(10);
    res.send(results).status(200);
});

app.get("/", (req, res) => {
    res.send("Work in progress!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    connectDb();
});