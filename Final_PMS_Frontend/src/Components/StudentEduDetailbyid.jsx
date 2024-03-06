import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import './contactdetails.css';

export default function StudentEduDetailbyid() {
  const [studentEducationDetails, setStudentEducationDetails] = useState([]);

  useEffect(() => {
    // Fetch all student education details when the component mounts
    fetchStudentEducationDetails();
  }, []);

  const fetchStudentEducationDetails = async () => {
    try {
      const response = await fetch('http://localhost:8080/getStudentEducationByStudentId/{studentId}');
      if (response.ok) {
        const data = await response.json();
        setStudentEducationDetails(data);
      } else {
        console.error('Failed to fetch student education details');
      }
    } catch (error) {
      console.error('Error fetching student education details', error);
    }
  };

  return (
    <Container className='head321'>
      <h3>Students Education Details Below: </h3>
      <Table striped bordered hover className='mt-5'>
        <thead style={{fontSize:'large'}}>
          <tr>
            <th>Student Education ID</th>
            <th>Class 10 Passing Year</th>
            <th>Class 10 Percentage</th>
            <th>Class 12 Passing Year</th>
            <th>Class 12 Percentage</th>
            <th>Graduation Completion Year</th>
            <th>Graduation CGPA</th>
          </tr>
        </thead>
        <tbody>
          {studentEducationDetails.map((studentEducation) => (
            <tr key={studentEducation.studentEducation_id}>
              <td>{studentEducation.studentEducationId}</td>
              <td>{studentEducation.class10PassingYear}</td>
              <td>{studentEducation.class10Percentage}</td>
              <td>{studentEducation.class12PassingYear}</td>
              <td>{studentEducation.class12Percentage}</td>
              <td>{studentEducation.graduationCompletionYear}</td>
              <td>{studentEducation.graduationPercentage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
