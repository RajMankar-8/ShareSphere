import React, { useState } from 'react';
import { Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import LockIcon from '@mui/icons-material/Lock';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Login() {
  const paperStyle = {
    padding: 20,
    height: '55vh',
    width: 350,
    margin: '20px auto',
    background: 'transparent',
  };
  const btnStyle = { margin: '8px 0', backgroundColor: '#880ED4' };
  const avatarStyle = { backgroundColor: '#880ED4' };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users/sign_in', {
        user: {
          email,
          password,
        },
      });
      localStorage.setItem('token', response.headers.authorization);
      console.log(response.headers.authorization);
      const { status } = response.data;
      const { data } = status;
      toast.success('Login successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate('/');


    } catch (error) {
      toast.error('Invalid email or password', {
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
              Welcome!
              <br />
              <span>To our new website.</span>
            </h2>
            <p>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="social-icons">
              <a href="#">
                <i>
                  <LinkedInIcon />
                </i>
              </a>
              <a href="#">
                <i>
                  <FacebookIcon />
                </i>
              </a>
              <a href="#">
                <i>
                  <InstagramIcon />
                </i>
              </a>
              <a href="#">
                <i>
                  <TwitterIcon />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="logreg-box">
          <div className="form-box login">
            <Grid>
              <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                  <Avatar style={avatarStyle}>
                    <LockIcon />
                  </Avatar>
                  <h2 style={{ color: 'white' }}>Login</h2>
                </Grid>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  label="Email"
                  placeholder="Enter Username"
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                  style={{color:'#fff !important'}}
                />
                <TextField
                  id="standard-basic"
                  variant="standard"
                  label="Password"
                  placeholder="Enter password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                />
                <FormControlLabel style={{ color: 'white' }} value="end" control={<Checkbox />} label="Remember me" labelPlacement="end" />
                <Button type="submit" color="primary" variant="contained" onClick={handleLogin} fullWidth>
                  Login
                </Button>
                <Typography>
                  <span style={{ color: 'white' }}>Don't have an account? </span>
                  <Link href="/signin" style={{ marginLeft: '7px', color: 'white' }}>Sign Up </Link>
                </Typography>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
