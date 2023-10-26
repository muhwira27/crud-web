import express from "express";
import {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} from "../controllers/StudentController.js";

const router = express.Router();

router.get('/students', getStudents);
router.get('/students/:id', getStudentById);
router.post('/students', createStudent);
router.patch('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);
export default router;