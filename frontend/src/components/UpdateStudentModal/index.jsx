// Import package
import { useState, useEffect } from "react";
import propTypes from "prop-types";
import axios from "axios";

// Import assets
import TextField from "../TextField";
import CloseBtn from "../../assets/icons/x.svg";

// Import style
import styles from "./UpdateStudentModal.module.css";

export default function UpdateStudentModal(props) {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [creditCourse, setCreditCourse] = useState("");
  const [GPA, setGPA] = useState("");
  const { close: closeModal, id } = props;

  useEffect(() => {
    getUserById();
  }, []);

  // Function to update student by id
  const updateStudent = async (e) => {
    e.preventDefault();
    if (
      studentId.trim() === "" ||
      name.trim() === "" ||
      department.trim() === "" ||
      semester.trim() === "" ||
      creditCourse.trim() === "" ||
      GPA.trim() === ""
    ) {
      alert("Please fill out all fields")
      return;
    }

    const semester_ = parseInt(semester);
    const creditCourse_ = parseInt(creditCourse);
    const GPA_ = parseFloat(GPA);

    try {
      await axios.patch(`http://localhost:5000/students/${id}`, {
        "student_id": studentId,
        "name": name,
        "department": department,
        "semester": semester_,
        "credit_course": creditCourse_,
        "gpa": GPA_
      });
      closeModal();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Funtion to get student data by id
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/students/${id}`);
    setStudentId(response.data.student_id)
    setName(response.data.name);
    setDepartment(response.data.department);
    setSemester(response.data.semester.toString());
    setCreditCourse(response.data.credit_course.toString());
    setGPA(response.data.gpa.toString());
  };

  return (
    <div className={styles.overlay}>
      <section className={styles.container}>
        <header className={styles.modalHeader}>
          <h1>Edit Data Mahasiswa</h1>
          <img src={CloseBtn} alt="close-button" onClick={closeModal} />
        </header>
        <main className={styles.modalBody}>
          <TextField
            placeholder="NIM"
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            errorMsg={"NIM tidak boleh kosong"}
          />
          <TextField
            placeholder="Nama"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            errorMsg={"Nama tidak boleh kosong"}
          />
          <TextField
            placeholder="Program Studi"
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            errorMsg={"Program Studi tidak boleh kosong"}
          />
          <TextField
            placeholder="Semester"
            type="number"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            errorMsg={"Semester tidak boleh kosong"}
          />
          <div className={styles.inputRow}>
            <TextField
              placeholder="SKS Dilulusi"
              type="number"
              value={creditCourse}
              onChange={(e) => setCreditCourse(e.target.value)}
              errorMsg={"SKS tidak boleh kosong"}
            />
            <TextField
              placeholder="IPK"
              type="number"
              value={GPA}
              onChange={(e) => setGPA(e.target.value)}
              errorMsg={"IPK tidak boleh kosong"}
            />
          </div>
          <button onClick={updateStudent}>Submit</button>
        </main>
      </section>
    </div>
  );
}

UpdateStudentModal.propTypes = {
  id: propTypes.number.isRequired,
  close: propTypes.func.isRequired,
};
