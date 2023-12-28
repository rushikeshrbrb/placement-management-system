
import React, { useEffect, useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { StudentSidebar } from './StudentSidebar';
import { CompanySidebar } from './CompanySidebar';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const [userType, setUserType] = useState();
  const params = useParams();

  useEffect(() => {
    // Extract userType from the URL params
    setUserType(params.userType);
  }, [params.userType]);

  return (
    <div className="dashboard-container">
      {/* <div className="content sticky-top">
        <br /><br /><br />
        <h1>Welcome to the {userType} Dashboard</h1>
        <hr />
      </div> */}

      {userType === "admin" && <AdminSidebar />}
      {userType === "student" && <StudentSidebar />}
      {userType === "company" && <CompanySidebar />}
    </div>
  );
};

export default Dashboard;
