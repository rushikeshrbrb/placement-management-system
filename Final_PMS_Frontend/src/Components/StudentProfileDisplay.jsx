import React, { useEffect, useState } from "react";
import { Table, Col, Container, Row, Alert } from "react-bootstrap";
import { fetchStudentById, fetchStudentByid } from "../Services/services";
import { useParams } from "react-router-dom";

export function StudentProfileDisplay() {
  const [userDetails, setUserDetails] = useState();
  const { userId } = useParams();

  useEffect(() => {
    async function populateUserState() {
      try {
        const data = await fetchStudentByid(userId);

        setUserDetails(data);

        console.log("Data fetched from the database successfully");
      } catch (error) {
        console.log(error);
      }
    }

    populateUserState();
  }, [userId]);

  return (
    <Container>
      {userDetails ? (
        <Row>
          <Col>
            <Alert
              className="text-center"
              variant="primary"
              style={{
                fontSize: "35px",
                marginBottom: "20px",
                marginTop: "50px",
              }}
            >
              Student Profile
            </Alert>

            <h2 style={{ color: "white" }}>User Profile</h2>
            <div style={{ color: "black", fontSize: "20px" }}>
              <Table striped bordered hover style={{ marginTop: "20px" }}>
                <tbody>
                  <tr>
                    <td>
                      <b>Student Name:</b>
                    </td>
                    <td>{userDetails.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Gender:</b>
                    </td>
                    <td>{userDetails.gender}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Date of Birth:</b>
                    </td>
                    <td>{userDetails.dob}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Phone:</b>
                    </td>
                    <td>{userDetails.phone}</td>
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