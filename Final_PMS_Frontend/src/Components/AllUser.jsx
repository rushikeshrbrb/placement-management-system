import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../Services/TokenUtils';

const UserListByRole = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [users, setUsers] = useState([]);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/deleteusers/${userId}`);
      // After deletion, refetch the updated user list
      fetchUsersByRole();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const fetchUsersByRole = async () => {
    try {
      if (selectedRole) {
        const response = await axios.get(`http://localhost:8080/role/${selectedRole}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
        setUsers(response.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsersByRole();
  }, [selectedRole]);

  return (
    <div>
      <div>
        <center><label htmlFor="role">Please Select Role: </label>
        
        <select style={{boxSizing:'border-box'}} id="role" value={selectedRole} onChange={handleRoleChange}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="company">Company</option>
          <option value="PLACEMENT OFFICER">Placement Officer</option>
          <option value="HOD">HOD</option>
        </select>
        </center>
      </div>

      {selectedRole && users.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Role</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.email}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.role}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserListByRole;
