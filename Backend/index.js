import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from "./routes/userRoute.js"



const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
connectDB();

app.get('/', (req, res) => {
    res.send('Hello')
});

app.use('/api/user', userRouter)

app.listen(port, () => console.log(`server running on port http://localhost:${port}`));