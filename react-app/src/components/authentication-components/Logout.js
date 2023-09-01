import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete('http://localhost:3000/users/sign_out', {
        headers: {
          'Authorization': token,
        },
      }).then((res) => {
        console.log(res.data);
        localStorage.removeItem('token');
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
