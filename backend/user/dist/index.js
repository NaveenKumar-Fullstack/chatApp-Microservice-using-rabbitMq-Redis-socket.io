import express, { json } from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import { createClient } from 'redis';
import userRoutes from './routes/user.js';
import { connectRabbitMQ } from './config/rabbitmq.js';
import cors from 'cors';
dotenv.config();
connectDb();
connectRabbitMQ();
if (!process.env.REDIS_URL) {
    throw new Error("REDIS_URL is not defined in .env file");
}
export const redisClient = createClient({
    url: process.env.REDIS_URL,
});
redisClient.connect().then(() => console.log("Connect to Redis")).catch(console.error);
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", userRoutes);
app.get("/health", (req, res) => {
    res.send("hello");
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
//# sourceMappingURL=index.js.map