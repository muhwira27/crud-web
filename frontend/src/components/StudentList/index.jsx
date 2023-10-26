// Impost package
import { useEffect, useState } from "react";
import axios from "axios";

// Import assets
import edit from "../../assets/icons/edit.png";
import trash from "../../assets/icons/trash.png";

// Import style
import styles from "./StudentList.module.css";

export default function ContactList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  // Function to get all students
  const getStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/students");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to delete student by id
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/students/${id}`);
      getStudents();
    } catch (error) {
      console.log(error);
    }
  };

  // Display all student
  const renderStudentList = (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>NIM</th>
          <th>Nama</th>
          <th>Program Studi</th>
          <th>Semester</th>
          <th>SKS</th>
          <th>IPK</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.student_id}</td>
            <td>{student.name}</td>
            <td>{student.department}</td>
            <td>{student.semester}</td>
            <td>{student.credit_course}</td>
            <td>{student.gpa}</td>
            <td>
              <img
                className={styles.action}
                src={edit}
                alt="edit"
              />
              <img
                className={styles.action}
                src={trash}
                alt="trash"
                onClick={() => deleteStudent(student.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );

  return (
    <main className={`${styles.studentList}`}>
      {renderStudentList}
    </main>
  );
}
