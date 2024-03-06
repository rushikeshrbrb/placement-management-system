import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Assuming you fetch data from your API and set it to the 'students' state
    // Replace the following with your actual API call
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/namesAndPhones'); // Replace with your API endpoint
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Student Table</h2>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {students.map((student) => (
            <tr key={student[0]}>
              <td>{student[0]}</td>
              <td>{student[1]}</td>
              <td>{student[2]}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default StudentTable;
