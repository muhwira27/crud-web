// Import package
import { useState } from "react";
import propTypes from "prop-types";
import axios from "axios";

// Import assets
import TextField from "../TextField";
import CloseBtn from "../../assets/icons/x.svg";

// Import style
import styles from "./AddStudentModal.module.css";

export default function AddStudentModal(props) {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [creditCourse, setCreditCourse] = useState("");
  const [GPA, setGPA] = useState("");
  const { close: closeModal } = props;

  // Function to store student data to database 
  const saveStudent = async (e) => {
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
      await axios.post("http://localhost:5000/students", {
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

  return (
    <div className={styles.overlay}>
      <section className={styles.container}>
        <header className={styles.modalHeader}>
          <h1>Isi Data Mahasiswa</h1>
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
          <button onClick={saveStudent}>Submit</button>
        </main>
      </section>
    </div>
  );
}

AddStudentModal.propTypes = {
  close: propTypes.func.isRequired,
};
