import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { getAdminByUserId } from "../Services/services";
import { useParams } from "react-router-dom";

const AdminDetailsTable = () => {
  const [userDetails, setUserDetails] = useState();
  const { userId } = useParams();

  async function populateAdminState() {
    try {
      const data = await getAdminByUserId(userId);
      setUserDetails(data);
      console.log(data);
      console.log("Data fetched from the database successfully");
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    populateAdminState();
  }, [userId]);

  return (
    <MDBTable>
      <MDBTableHead>
        <tr style={{fontSize:'large'}}>
          <th>Name</th>
          <th>Designation</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>{userDetails && userDetails.name}</td>
          <td>{userDetails && userDetails.designation}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default AdminDetailsTable;