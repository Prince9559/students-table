import React, { createContext, useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
export const StudentContext = createContext();

function StudentProvider({ children }) {

  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const API = "http://localhost:5000/students";

  const fetchStudents = async () => {

    const res = await fetch(API);
    const data = await res.json();
    setStudents(data);

  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (student) => {

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });

    fetchStudents();
  };


  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) 
      {
      await fetch(`${API}/${id}`, 
      {
        method: "DELETE"
      });

      fetchStudents();
    }
  };

  const updateStudent = async (student) => {

    await fetch(`${API}/${student.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });

    setEditStudent(null);
    fetchStudents();
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