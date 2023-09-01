import React from 'react';
import { useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ContactComponentofEmail from './ContactComponentofEmail';

const listItemStyle = {
  color: "white",
  border: '1px solid lightgray',
  marginTop: '10px',
  marginBottom: '15px'
};

const listStyle = {
  width: '100%',
  maxWidth: 580,
  bgcolor: 'transparent',
  marginLeft: '30px'
};

const hoverStyle = {
  transform: 'translateY(-10px) scale(1.1)',
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'
};

export default function EmailList({referral}) {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  if (token === null) {
    navigate('/signin');
  }
  

  return (
    <div className='homepage-background'>
      <div className='home-page-email-container'>
        <div style={{ marginTop: '2%' }}>
          <h1 style={{ marginLeft: '2%' }}>Referral Emails</h1>
        </div>
        <div className="email-list-container" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
          <List sx={listStyle}>
            {referral.reverse().map((item) => (
              <ListItem alignItems="flex-start" style={listItemStyle} className='list'>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="https://img.icons8.com/color/48/gmail-new.png" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <span>{item.email}</span>
                      </span>
                    </React.Fragment>
                  }
                  style={{ marginLeft: '5px' }}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="white"
                      >
                        {item.subject}
                      </Typography>
                      <span style={{ color: 'white' }}>{" — We are excited to extend a special invitation to you to join us at WebinaHub!"}</span>
                      <ContactComponentofEmail />
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}
