
import React, { useState } from 'react';
import '../Styles/StudentInfo.css';

const StudentInfo = () => {
  const [name, setName] = useState('');
  const [tenthPassYear, setTenthPassYear] = useState('');
  const [tenthPercentage, setTenthPercentage] = useState('');
  const [twelfthPassYear, setTwelfthPassYear] = useState('');
  const [twelfthPercentage, setTwelfthPercentage] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [graduationCGPA, setGraduationCGPA] = useState('');
  const [resume, setResume] = useState('');
  
  

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setName(value);
    
  };

  const handleTenthPassYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setTenthPassYear(value);
    
  };

  const handleTenthPercentageChange = (e) => {
    let value = e.target.value.replace(/[^\d.%]/g, '');
  
   
    value = value.replace(/^0+(\d)/, '$1');
  
    
    const floatValue = parseFloat(value);
    if (isNaN(floatValue) || floatValue < 1) {
      value = '1';
    } else if (floatValue > 100) {
      value = '100';
    }
  
    setTenthPercentage(value);
  };

  const handleTwelfthPassYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setTwelfthPassYear(value);
  };

  const handleTwelfthPercentageChange = (e) => {
    let value = e.target.value.replace(/[^\d.%]/g, '');
  
    // Remove leading zeros
    value = value.replace(/^0+(\d)/, '$1');
  
    
    const floatValue = parseFloat(value);
    if (isNaN(floatValue) || floatValue < 1) {
      value = '1';
    } else if (floatValue > 100) {
      value = '100';
    }
  
    setTwelfthPercentage(value);
  };

  const handleGraduationYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setGraduationYear(value);
  };

  const handleGraduationCGPAChange = (e) => {
    let value = e.target.value.replace(/[^\d.%]/g, '');
  
   
    value = value.replace(/^0+(\d)/, '$1');
  
    
    const floatValue = parseFloat(value);
    if (isNaN(floatValue) || floatValue < 1) {
      value = '1';
    } else if (floatValue > 10) {
      value = '10';
    }
  
    setGraduationCGPA(value);
  };
  
  
  const handleResumeChange = (e) => {
    setResume(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (
      name &&
      tenthPassYear &&
      tenthPercentage &&
      twelfthPassYear &&
      twelfthPercentage &&
      graduationYear &&
      graduationCGPA &&
      resume
    ) {

      alert('Successfully submitted!');

      setName('');
      setTenthPassYear('');
      setTenthPercentage('');
      setTwelfthPassYear('');
      setTwelfthPercentage('');
      setGraduationYear('');
      setGraduationCGPA('');
      setResume('');               
    } else {
      
      alert('Please fill out all fields before submitting.');
    }
  };


  return (
    <div className="overlay">
      <header className="head-form">
        <h2>Upload Student Info</h2>
      </header>
      <form className="inner-form">
        <div className="con">
          <div className="field-set">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="input-item">
                      <label htmlFor="name">
                        <i className="fa fa-user-circle"></i> Name
                      </label >
                      
                    </div>
                  </td>
                  <td>
                    <div className="input-item">
                    
                      <input
                        className="form-input"
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        
                        value={name}
                        onChange={handleNameChange}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="input-item">
                      <label htmlFor="tenthPassYear">
                        <i className="fa fa-calendar"></i> 10th Pass Year
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="input-item">
                      <input
                        className="form-input"
                        type="text"
                        id="tenthPassYear"
                        placeholder="Enter your 10th pass year"
                        value={tenthPassYear}
                        onChange={handleTenthPassYearChange}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="input-item">
                      <label htmlFor="tenthPercentage">
                        <i className="fa fa-percent"></i> 10th Percentage
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="input-item">
                      <input
                        className="form-input"
                        type="text"
                        id="tenthPercentage"
                        placeholder="Enter your 10th percentage"
                        value={tenthPercentage}
                        onChange={handleTenthPercentageChange}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="input-item">
                      <label htmlFor="twelfthPassYear">
                        <i className="fa fa-calendar"></i> 12th Pass Year
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="input-item">
                      <input
                        className="form-input"
                        type="text"
                        id="twelfthPassYear"
                        placeholder="Enter your 12th pass year"
                        value={twelfthPassYear}
                        onChange={handleTwelfthPassYearChange}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="input-item">
                      <label htmlFor="twelfthPercentage">
                        <i className="fa fa-percent"></i> 12th Percentage
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="input-item">
                      <input
                        className="form-input"
                        type="text"
                        id="twelfthPercentage"
                        placeholder="Enter your 12th percentage"
                        value={twelfthPercentage}
                        onChange={handleTwelfthPercentageChange}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="input-item">
                      <label htmlFor="graduationYear">
                        <i className="fa fa-calendar"></i> Graduation Year
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="input-item">
                      <input
                        className="form-input"
                        type="text"
                        id="graduationYear"
                        placeholder="Enter your graduation year"
                        value={graduationYear}
                        onChange={handleGraduationYearChange}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="input-item">
                      <label htmlFor="graduationCGPA">
                        <i className="fa fa-percent"></i> Graduation CGPA
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="input-item">
                      <input
                        className="form-input"
                        type="text"
                        id="graduationCGPA"
                        placeholder="Enter your graduation CGPA"
                        value={graduationCGPA}
                        onChange={handleGraduationCGPAChange}
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="input-item">
                      <label htmlFor="resume">
                        <i className="fa fa-upload"></i> Upload Resume
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="input-item">
                      <input
                        className="form-input"
                        type="file"
                        id="resume"
                        placeholder="Upload your resume"
                        value={resume}
                        onChange={handleResumeChange}
                        required
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="other"  >
        <button className="btn submits submit"  onClick={handleSubmit}>
         Submit
          <i className="fa fa-user-plus" aria-hidden="true"></i>
        </button>
      </div>
        </div>
      </form>
    </div>
  );
};

export default StudentInfo;
