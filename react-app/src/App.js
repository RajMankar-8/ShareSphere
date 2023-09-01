import React, { useEffect, useState } from 'react';
import './App.css';
import './components/style.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/authentication-components/Login';
import Signin from './components/authentication-components/Signin';
import Nav from './components/website-components/Navbar';
import Home from './components/Homepage';
import axios from 'axios';


function App() {
  const [showCreate, setShowCreate] = useState(false);
  const [referral, setReferral] = useState([]);

  const API_URL = "http://localhost:3000/referrals";

  function getData() {
    axios.get(API_URL)
      .then(resp => {
        setReferral(resp.data);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => getData(), []);

return (
  <div>
    <Nav showCreate={showCreate} setShowCreate={setShowCreate} getData={getData}/>
    <Routes>
      <Route path="/" element={<Home referral={referral} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  </div>
);
}

export default App;
