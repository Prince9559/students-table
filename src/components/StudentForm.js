import React, { useContext, useState, useEffect } from "react";
import { StudentContext } from "../context/StudentContext";
import "./StudentForm.css";

function StudentForm() {

  const { addStudent, editStudent, updateStudent } =
    useContext(StudentContext);

  const [student, setStudent] = useState({name: "",email: "",age: ""});

  useEffect(() => {
    if (editStudent) 
    {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setStudent({...student,[e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {e.preventDefault();
    if (editStudent) 
    {
      updateStudent(student);
    } 
    else 
    {
      addStudent(student);
    }

    setStudent({name: "",email: "",age: ""});
  };

  return (

    <form className="student-form" onSubmit={handleSubmit}>

      <input name="name" placeholder="Name" value={student.name} onChange={handleChange}/>

      <input name="email" placeholder="Email"value={student.email}onChange={handleChange}/>

      <input name="age" placeholder="Age" value={student.age} onChange={handleChange}/>

      <button>
        {editStudent ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

export default StudentForm;