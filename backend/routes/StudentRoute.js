import express from "express";
import {
  getStudents,
} from "../controllers/StudentController.js";

const router = express.Router();

router.get('/students', getStudents);
export default router;