import React from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Footer from "./components/Footer";
import StudentProvider from "./context/StudentContext";

function App() {

  return (

    <StudentProvider>

      <div className="container">
        <h1 className="title">Students Management System</h1>

        <div className="card">
          <h2 className="section-title">Add Student</h2>
          <StudentForm />

        </div>

        <div className="card">
          <h2 className="section-title">Students List</h2>
          <StudentTable />

        </div>

      </div>
      <Footer />

    </StudentProvider>

  );
}

export default App;