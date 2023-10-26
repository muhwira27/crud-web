// import package
import { useState } from "react";

// import components
import StudentList from "./components/StudentList";
import Modal from "./components/AddStudentModal";

// import styles
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="main">
      <section className="title">
        <h1>Daftar Mahasiswa</h1>
        <div className="addStudentBtn">
          <button onClick={() => setOpenModal(true)}>Tambah Mahasiswa</button>
        </div>
      </section>

      {openModal && (
        <Modal
          close={() => setOpenModal(false)}
        />
      )}

      <section className="container">
        <StudentList />
      </section>
    </main>
  );
}

export default App;
