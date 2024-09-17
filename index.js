import express from 'express';
import 'dotenv/config';
import connectDb from './data/db.js'
import zips from "./routes/zips.js"
import grades from "./routes/grades.js"
import posts from "./routes/posts.js"

const app = express();
const PORT = 8080;
app.use(express.json());

//Routes
app.use("/zips", zips);
app.use("/grades", grades);
app.use("/posts", posts);

app.get("/", (req, res) => {
    res.send("Work in progress!");
});

app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found" });
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    connectDb();
});