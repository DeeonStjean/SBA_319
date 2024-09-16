import express from 'express';
import 'dotenv/config'; 

const app = express();
const PORT = 8080;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Work in progress!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    //connecthDb();
});