import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import "./StudentTable.css";

function StudentTable() {

  const { students, deleteStudent, setEditStudent, downloadExcel } =
    useContext(StudentContext);

  return (

    <div>

      <div className="table-wrapper">
        <table className="student-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (
                <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>

                <td className="action-buttons">

                <button className="edit-btn" onClick={() => setEditStudent(student)}>Edit</button>

                <button className="delete-btn" onClick={() => deleteStudent(student.id)}>Delete</button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>


    <div className="excel-btn-container">

    <button className="excel-btn" onClick={downloadExcel}>Download Excel</button>

    </div>
    </div>

  );
}
export default StudentTable;