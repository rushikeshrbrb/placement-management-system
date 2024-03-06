
import React, { useEffect, useState } from 'react';
import { Table, Col, Container, Row, Alert } from 'react-bootstrap';
import { findcompany } from '../Services/services';
import { useParams } from 'react-router-dom';

export function CompanyProfile() {
  const [userDetails, setUserDetails] = useState(); 
  const { userId } = useParams();

  useEffect(() => { async function populateUserState() {
      try {
        const data = await findcompany(userId);

        console.log(data);

        setUserDetails(data);

        console.log(userDetails);

        console.log('Data fetched from the database successfully');
      } catch (error) {
        console.log(error);
      }
    }
    populateUserState();
  }, [userId]);

  console.log(userDetails); 

  return (
    <Container>
      {userDetails ? (
        <Row>
          <Col>
            <Alert className="text-center" variant="primary" style={{ fontSize: '35px' }}>
              {' '}
              User Profile
            </Alert>

            
            <h2 style={{ color: "white" }}>User Profile</h2>
            <div style={{ color: "black", fontSize: "20px" }}>
              <Table striped bordered hover style={{ marginTop: "20px" }}>
                <tbody>
                  <tr>
                    <td>
                      <b>Company Name :</b>
                    </td>
                    <td> {userDetails.companyName}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Website :</b>
                    </td>
                    <td>{userDetails.website}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>City :</b>
                    </td>
                    <td>{userDetails.city}</td>
                  </tr>
                  
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      ) : (
        <div>Loading...</div>
        )}
    </Container>
  );
}

