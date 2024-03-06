
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import StudentSidebar from './StudentSidebar';
import CompanySidebar from './CompanySidebar';

export default function Dashboard(){
  const [userType, setUserType] = useState();
  const params = useParams();

  useEffect(() => {
    // Extract userType from the URL params
    setUserType(params.userType);
  }, [params.userType]);

  return (
    <div className="dashboard-container ">
      {/* <div className="content sticky-top">
        <br /><br /><br />
        <h1>Welcome to the {userType} Dashboard</h1>
        <hr />
      </div> */}

      {userType === "admin" && <AdminSidebar/>}
      {userType === "student" && <StudentSidebar/>}
      {userType === "company" && <CompanySidebar/>}
    </div>
  );
};

