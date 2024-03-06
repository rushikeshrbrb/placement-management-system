import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import './contactdetails.css';

export default function CompanyDetails() {
  const [companyDetails, setCompanyDetails] = useState([]);

  useEffect(() => {
   
    fetchcompanytDetails();
  }, []);

  const fetchcompanytDetails = async () => {
    try {
      const response = await fetch('http://localhost:8080/admin/getallcompanies');
      if (response.ok) {
        const data = await response.json();
        setCompanyDetails(data);
      } else {
        console.error('Failed to fetch company details');
      }
    } catch (error) {
      console.error('Error fetching company details', error);
    }
  };

  return (
    <Container className='head321'>
      <h3>company Details Below: </h3>
      <Table striped bordered hover className='mt-5'>
        <thead>
          <tr style={{fontSize:'large'}}>
            <th>company ID</th>
            <th>Company Name</th>
            <th>Company Website</th>
            <th>Location</th>
            <th>Conatact No</th>
          </tr>
        </thead>
        <tbody>
          {companyDetails.map((company) => (
            <tr key={company.companyId}>
              <td>{company.companyId}</td>
              <td>{company.companyName}</td>
              <td>{company.website}</td>
              <td>{company.city}</td>
              <td>{company.contactNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
