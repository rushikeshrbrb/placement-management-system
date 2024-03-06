import axios from "axios";
import { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Table } from "react-bootstrap";

export function PlacedStudentStatus(){
    const [data, setData] = useState([]);
    const fetchJobs = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/job-applications/selectedStudents`);
           
           console.log(response);
           setData(response.data);
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };
      useEffect(() => {
        fetchJobs();
      }, []);




    // return (
    //     <div>
    //       <h2>User Details</h2>
    //       <ul>
    //         {data.map((user, index) => (
    //           <li key={index}>
    //             <strong>Student Name:</strong> {user.studentName}, <strong>Company Name:</strong> {user.companyName}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
    // };

    return (
        // <div>
        //   <h2>User Details</h2>
        //   <table >
        //     <thead>
        //       <tr>
        //         <th>Student Name</th>
        //         <th>Company Name</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {data.map((user, index) => (
        //         <tr key={index}>
        //           <td>{user.studentName}</td>
        //           <td>{user.companyName}</td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </table>
        // </div>

<div>
  <h4>Placed Student : </h4>
  <Table striped bordered hover>
        <thead style={{fontSize:'large'}}>
        
  <tr style={{fontSize:'large'}}>
    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Student Name</th>
    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Placed Company</th>
   
  </tr>
</thead>
<tbody>
  {data.map((user, index) => (
    <tr >
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.studentName}</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.companyName}</td>
     
        
    </tr>
  ))}
</tbody>
</Table>

</div>
      );


    };

