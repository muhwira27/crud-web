import express from "express";
import cors from "cors";
import StudentRoute from "./routes/StudentRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(StudentRoute);

app.listen(5000, () => console.log('Server running on port 5000...'));
