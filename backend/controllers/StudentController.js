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
