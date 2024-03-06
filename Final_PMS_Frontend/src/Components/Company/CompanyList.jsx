import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const CompanyTable = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Assuming you fetch data from your API and set it to the 'companies' state
    // Replace the following with your actual API call
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/allCompany'); // Replace with your API endpoint
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching Company data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Companies Table</h2>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>Compay Website</th>
            <th>Company Name</th>
            <th>City</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.website}</td>
              <td>{company.companyName}</td>
              <td>{company.city}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default CompanyTable;
