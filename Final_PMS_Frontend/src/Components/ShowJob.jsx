import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';

import { fetchStudentById, fetchStudentByid } from "../Services/services";
const JobList = () => {

  // Job Model
  const [show, setShow] = useState(false);
  const [studentID,setStudentID]=useState({})
  const [companyID,setCompanyID]=useState({})

  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (jobId) => {
    setSelectedJobId(jobId); // Set the selected job ID
    const selectedJob = jobs.find((job) => job.jobId === jobId);
    console.log("Company ID:",selectedJob.company.companyId);
    const id=selectedJob.company.companyId;
    setCompanyID(id);
    const companyId = selectedJob.companyId; // Update 'companyId' to the actual field name in your job object

    // Now you have the company ID, you can use it as needed
    // console.log("Company ID:", companyId);
    setShow(true);
  };

  const [userDetails, setUserDetails] = useState();

  const { userId } = useParams();

  const [formData, setFormData] = useState({
    email: '',
    mobileNo: '',
    experience: '',
    graduationYear: '',
    textareaValue: '',
    resume: null,
    studentId: '',
    companyId:'',
    jobId: '',
  });



  useEffect(() => {
    async function populateUserState() {
      try {
        const data = await fetchStudentByid(userId);

        // setUserDetails(data);
        console.log(data);
        setStudentID(data.id);

        console.log("Data fetched from the database successfully");
      } catch (error) {
        console.log(error);
      }
    }

    populateUserState();
  }, [userId]);
  //

  //show all jobs

  const [jobs, setJobs] = useState([]);
let companyId=1;
  const fetchJobs = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/alljobs`);
      // const jobsWithCompanyID = response.data.map((job) => ({
      //   ...job,
      //   companyId: job.company.companyId,
      // }));
      // console.log(jobsWithCompanyID);

      setJobs(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [companyId]);

  const handleApplyClick = async () => {
    console.log('Form Data:', formData);
    try {
      const requestBody = {
        email: formData.email,
        mobileNo: formData.mobileNo,
        experience: formData.experience,
        graduationYear: formData.graduationYear,
        textareaValue: formData.textareaValue,
        companyId:companyID,
        studentId: studentID,
        jobId: selectedJobId,
      };
  
      const headers = {
        'Content-Type': 'application/json',
        // Add any other headers you may need, e.g., Authorization token
      };
  
      const response = await axios.post('http://localhost:8080/api/job-applications/apply', requestBody)
      //  {
      //   headers: headers,
      // });
  
      console.log('Response from the backend:', response.data);
      alert('Job application submitted successfully!');
    } catch (error) {
      console.error('Error applying for job:', error);
    } finally {
      setFormData({
        email: '',
        mobileNo: '',
        experience: '',
        graduationYear: '',
        textareaValue: '',
        companyId:companyID,
        studentId: studentID,
        jobId: selectedJobId,
      });
      handleClose();
    }
  };
  

  return (
    <div>
      <h2>Jobs List</h2>
      <MDBTable>
        <MDBTableHead color="primary-color">
        <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Job ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Designation</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Specialization</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Experience</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Criteria 10th</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Criteria 12th</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Graduation Criteria</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>CTC</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Apply For Job</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {jobs.map((job) => (
            <tr key={job.jobId}>
             <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.jobId}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.designation}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.specialization}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.experience}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.description}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.marks10}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.marks12}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.graduation_percent}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.status}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.ctc}</td>
              <td  style={{ border: '1px solid #ddd', padding: '8px' }} ><Button variant="primary" onClick={() =>handleShow(job.jobId)}>Apply</Button></td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>


    {/* Job model */}

    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Student Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Mobile Number"
                autoFocus
                value={formData.mobileNo}
                onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>How many years of work experience do you have?</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Experience in years"
                autoFocus
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Graduation Year</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Graduation"
                autoFocus
                value={formData.graduationYear}
                onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Skills Related to Job Profile</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.textareaValue}
                onChange={(e) => setFormData({ ...formData, textareaValue: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Resume</Form.Label>
              <Form.Control
                type="file"
                // onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleApplyClick}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
};

export default JobList;
