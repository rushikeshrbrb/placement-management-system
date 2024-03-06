import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { findcompany } from '../../Services/services';


export  function ShowSpecificCompanyJobs(){


    const { userId } = useParams();
    const [jobs, setJobs] = useState([]);
    const [CompanyID,setCompany]=useState({})
    console.log(userId)
    const [selectedJobId, setSelectedJobId] = useState(null);
  const [applications, setApplications] = useState([]);
  const [showApplicationsModal, setShowApplicationsModal] = useState(false);
  const[SelectedApplicationId,setSelectedApplicationId]=useState([]);


    useEffect(() => {
        async function populateUserState() {
          try {
            const data = await findcompany(userId);
    
            // setUserDetails(data);
            console.log(data.companyId);
            setCompany(data.companyId);
    
            console.log("Data fetched from the database successfully");
          } catch (error) {
            console.log(error);
          }
        }
    
        populateUserState();
      }, [userId]);
      // let companyId=1;
    const fetchJobs = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/jobcompany/${CompanyID}`);
           setJobs(response.data);
           console.log(response.data?.status);
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };

      const DeleteJob = async (jobId) => {
        try {
          const response = await axios.delete(`http://localhost:8080/delete/${jobId}`);
           alert("Deleted Successfully");
          
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };
      useEffect(() => {
        fetchJobs();
      }, [CompanyID]);


      // const fetchApplications = async (jobId) => {
      //   try {
      //     const response = await axios.get(`http://localhost:8080/api/job-applications/job/${jobId}`);
      //     console.log(response.status);
      //     setApplications(response.data);
      //     console.log(response.data[0].status);
         
      //   } catch (error) {
      //     console.error('Error fetching applications:', error);
      //   }
      // };

      const fetchApplications = async (jobId) => {
        try {
          const response = await axios.get(`http://localhost:8080/api/job-applications/job/${jobId}`);
          
          console.log(response.status);
      
          const hasNullStatus = response.data.some(application => application.status === null);
      
          if (hasNullStatus) {
            setApplications(response.data);
            console.log('At least one application has a null status.');
          } else {
            console.log('No application has a null status. Applications not set in state.');
          }
        } catch (error) {
          console.error('Error fetching applications:', error);
        }
      };
      
    
      const handleShowApplications = (jobId) => {
        setSelectedJobId(jobId);
        fetchApplications(jobId);
        setShowApplicationsModal(true);
      };
    
      const handleCloseApplicationsModal = () => {
        setShowApplicationsModal(false);
      };


      //For Select the student 
      const handleSelectApplication = (applicationId) => {
        // Set the selected application ID
        setSelectedApplicationId(applicationId);
    
        // Perform API call to update the application status
        const updateStatus = async () => {
          try {
            const response = await axios.post(`http://localhost:8080/api/job-applications/select/${applicationId}`, {
              status: 'selected',
              remark: 'This student is selected for the job.',
            });
            console.log('Application status updated successfully:', response.data);
          } catch (error) {
            console.error('Error updating application status:', error);
          }
        };
    
        // Call the function to update the status
        updateStatus();
        alert("Application Selected successfully  For Next Process..!")
      };
      //Reject the Student
      const handleRejectApplication = (applicationId) => {
        // Set the selected application ID
        setSelectedApplicationId(applicationId);
    
        // Perform API call to update the application status
        const updateStatus = async () => {
          try {
            const response = await axios.post(`http://localhost:8080/api/job-applications/reject/${applicationId}`, {
              status: 'rejected',
              remark: 'This student is rejected for the job.',
            });
            console.log('Application status updated successfully:', response.data);
          } catch (error) {
            console.error('Error updating application status:', error);
          }
          alert("Application Rejected Successfully..!")
        };
    
        // Call the function to update the status
        updateStatus();
      };
    return(
        <div>
      <h2>Jobs List  </h2>
      <MDBTable className='me-5'>
        <MDBTableHead color="primary-color">
        <tr style={{fontSize:"large"}}>
            {/* <th style={{ border: '1px solid #ddd', padding: '8px' }}>Job ID</th> */}
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Designation</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Specialization</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Experience</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Criteria 10th</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Criteria 12th</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Graduation Criteria</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>CTC</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Show Application</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {jobs.map((job) => (
            <tr key={job.jobId}>
             {/* <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.jobId}</td> */}
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.designation}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.specialization}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.experience}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.description}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.marks10}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.marks12}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.graduation_percent}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.ctc}</td>
              <td  style={{ border: '1px solid #ddd', padding: '8px' }} ><Button variant="primary"onClick={() => handleShowApplications(job.jobId)}>Show Applications</Button></td>
              <td  style={{ border: '1px solid #ddd', padding: '8px' }} ><Button variant="primary"onClick={() => DeleteJob(job.jobId)}>Delete Job</Button></td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <Modal show={showApplicationsModal} onHide={handleCloseApplicationsModal}>
        <Modal.Header closeButton>
          <Modal.Title>Job Applications for Job ID: {selectedJobId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {applications.map((application) => (
              <li key={application.applicationId}>
                <strong>Email:</strong> {application.email}{application.applicationId}<br />
                <strong>Mobile Number:</strong> {application.mobileNo}<br />
                <strong>Experience:</strong> {application.experience} years<br />
                <strong>Graduation Year:</strong> {application.graduationYear}<br />
                <strong>Technical Skills:</strong> {application.textareaValue}<br></br>
                <Button variant="primary"  onClick={() => handleSelectApplication(application.applicationId)}>Select</Button>&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="primary"onClick={() => handleRejectApplication(application.applicationId)}>Reject</Button>
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
</div>




    );

}