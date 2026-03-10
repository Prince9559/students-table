import React from "react";
import "./Footer.css";

function Footer() {
  return (

    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Students Management System</h3>
          <p>
            This Students Management System is a React.js based application
            designed to manage student records efficiently. Users can add,
            edit, delete, and view student information in a structured table.
            The project demonstrates CRUD operations, responsive design,
            and Excel export functionality.
          </p>

          <p>© 2026 Students Management System. All Rights Reserved.</p>
        </div>


        <div className="footer-column">
          <h4>Project Features</h4>
          <ul>
            <li>Add Student Record</li>
            <li>Edit Student Details</li>
            <li>Delete Student Record</li>
            <li>Student Data Table</li>
            <li>Excel Download</li>
            <li>Responsive Design</li>
            <li>Local Storage Support</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Technologies Used</h4>
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6)</li>
            <li>CSS3</li>
            <li>LocalStorage</li>
            <li>File-Saver</li>
            <li>XLSX Library</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>

          <a
            href="https://wa.me/919559618602"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn">
            <div className="b">WhatsApp</div>
          </a>

        </div>
      </div>

      <hr/>

      <div className="footer-bottom">
        <p>Frontend React Assignment Project - Students Management System</p>
      </div>

    </footer>
  );
}

export default Footer;