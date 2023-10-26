import Student from "../models/StudentModel.js";

export const getStudents = async (req, res) => {
  try {
    const response = await Student.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const getStudentById = async (req, res) => {
  try {
    const response = await Student.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const createStudent = async (req, res) => {
  try {
    await Student.create(req.body);
    res.status(201).json({ msg: "Student Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export const updateStudent = async (req, res) => {
  try {
    await Student.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "Student Updated" });
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteStudent = async (req, res) => {
  try {
    await Student.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "Student Deleted" });
  } catch (error) {
    console.log(error.message);
  }
}