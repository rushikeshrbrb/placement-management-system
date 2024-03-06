import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Table } from 'react-bootstrap';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Assuming you fetch data from your API and set it to the 'students' state
    // Replace the following with your actual API call
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/getAllStudents'); // get allstudents
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
      <Table striped bordered hover className='mt-5'>
        <thead style={{fontSize:'large'}}>
        
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Address</th>
          </tr>
       </thead>
       <tbody>
          {students.map((student) => (
            <tr key={student.id}>
               <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.dob}</td>
              <td>{student.gender}</td>
              <td>{student.address}</td>
            </tr>
          ))}
          </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
