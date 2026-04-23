import express from "express";
import dotenv from 'dotenv';
import { startSentOtpConsumer } from "./consumer.js";
dotenv.config();
const app = express();
app.use(express.json());
startSentOtpConsumer();
const port = process.env.PORT;
console.log(port);
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
//# sourceMappingURL=index.js.map