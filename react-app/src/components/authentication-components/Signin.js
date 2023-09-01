import React, { useState } from 'react';
import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Signin() {
  const paperStyle = {
    padding: 20,
    height: '55vh',
    width: 350,
    margin: '20px auto',
    background: 'transparent',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '8px 0' };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users', {
        user: {
          email: email,
          password: password,
        },
      });
      const { status } = response.data;
      const { data } = status;

      if (data !== null) {
        if (status === 'unprocessable_entity') {
          toast.error('User Already Registered', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          navigate('/login');
          toast.success('Sign Up Successful', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      }

      const { errors } = response.data;
      if (errors?.includes("Password confirmation doesn't match Password")) {
        toast.error('Password confirmation does not match password', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      if (errors?.includes('Email is invalid')) {
        toast.error('Email is invalid', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      if (errors?.includes('Password is too short (minimum is 6 characters)')) {
        toast.error('Password is too short', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error('Please Try Again', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div>
      <div className="background"></div>
      <div className="container">
        <div className="content">
          <h2 className="logo">
            <LocalFireDepartmentIcon />
            WebinaHub
          </h2>
          <div className="text-sci">
            <h2>
              Welcome!<br />
              <span>To our new website.</span>
            </h2>
            <p>
              It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="social-icons">
              <a href="#"><i><LinkedInIcon /></i></a>
              <a href="#"><i><FacebookIcon /></i></a>
              <a href="#"><i><InstagramIcon /></i></a>
              <a href="#"><i><TwitterIcon /></i></a>
            </div>
          </div>
        </div>
        <div className="logreg-box">
          <div className="form-box login">
            <Grid>
              <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                  <Avatar style={avatarStyle}><AddCircleIcon /></Avatar>
                  <h2 style={{color:'white'}}>Sign in</h2>
                  <Typography variant="caption" style={{color:'white'}}>Please fill this form to create an account</Typography>
                </Grid>
                <TextField id="standard-basic" variant="standard" label="Email" placeholder="Enter Username" onChange={(e) => setEmail(e.target.value)} fullWidth required />
                <TextField id="standard-basic" variant="standard" label="New Password" placeholder="Enter password" type="password" onChange={(e) => setPassword(e.target.value)} fullWidth required />
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  style={{color:'white'}}
                  label="I accept the terms and conditions."
                  labelPlacement="end"
                />
                <Button type="submit" color="primary" variant="contained" style={btnStyle} onClick={handleSignUp} fullWidth>Sign in</Button>
                <Typography>
                  <span style={{color:'white'}}>Already have an account?</span>
                  <Link style={{marginLeft:'8px'}} href="/login">Login </Link>
                </Typography>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
