import React, { createContext, useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const StudentContext = createContext();

function StudentProvider({ children }) {

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {

    const newStudent = {
      id: Date.now(),
      ...student
    };

    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {

    if (window.confirm("Are you sure you want to delete?")) {
      const updated = students.filter((s) => s.id !== id);
      setStudents(updated);

    }
  };

  const updateStudent = (updatedStudent) => {
    const updated = students.map((s) =>
      s.id === updatedStudent.id ? updatedStudent : s
    );

    setStudents(updated);
    setEditStudent(null);
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const data = new Blob([excelBuffer]);

    saveAs(data, "students.xlsx");
  };

  return (

    <StudentContext.Provider
      value={{students,addStudent,deleteStudent,updateStudent,editStudent,setEditStudent,downloadExcel}}>

      {children}
    </StudentContext.Provider>

  );
}

export default StudentProvider;