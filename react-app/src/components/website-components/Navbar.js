import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import LeftDrawer from './LeftDrawer';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Nav({showCreate,setShowCreate,getData}) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleSignOut = async () => {
    try {
      await axios.delete('http://localhost:3000/users/sign_out', {
        headers: {
          'Authorization': token,
        },
      });
      localStorage.removeItem('token');
      navigate('/signin');
    } catch (error) {
      toast.error('Please Try Again', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className='navbar' style={{ background: 'transparent' }}>
          <Toolbar variant="dense" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <LeftDrawer showCreate={showCreate} setShowCreate={setShowCreate} getData={getData}/>
              {token === null ? (
                <>
                  <Button color="inherit" href='/signin'>WebinaHub</Button>
                  <Button color="inherit" href='/signin'><HomeIcon style={{color:'white', marginRight:'7px', marginBottom:'5px'}}/>Home</Button>
                  <Button color="inherit" href='/login' sx={{ mr: 2 }}><LoginIcon style={{marginRight:'7px'}}/>Login</Button>
                  <Button color="inherit" href='/signin'><LockOpenIcon style={{marginRight:'7px', marginBottom:'2px'}}/>Sign in</Button>
                </>
              ) : (
                <>
                  <Button color="inherit" href='/' >WebinaHub</Button>
                  <Button color="inherit" href='/'><HomeIcon style={{color:'white', marginRight:'7px', marginBottom:'5px'}}/>Home</Button>
                  <Button color="inherit" onClick={handleSignOut}><ExitToAppIcon style={{marginRight:'8px'}}/>Sign out</Button> 
                </>
              )}
            </div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Nav;
