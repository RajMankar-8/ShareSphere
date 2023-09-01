import React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ChatIcon from '@mui/icons-material/Chat';
import Button from '@mui/material/Button';
import MaximizeIcon from '@mui/icons-material/Maximize';
import Avatar from '@mui/material/Avatar';

const chatCallIconStyle = {
  backgroundColor: '#72B15A'
};

const connectButtonStyle = {
  backgroundColor: '#d3d3d3',
  color: 'black',
  paddingLeft: '15px',
  paddingRight: '15px'
};

function ContactComponentofEmail() {
  return (
    <div className='content-container'>
      <div className='contact-container'>
        <span>
          <Avatar style={chatCallIconStyle}>
            <ChatIcon style={{ fontSize: '20px' }} />
          </Avatar>
        </span>
        <span>
          <Avatar style={chatCallIconStyle}>
            <AddIcCallIcon style={{ fontSize: '20px' }} />
          </Avatar>
        </span>
        <Button style={connectButtonStyle}>
          Contained
          <PersonAddIcon style={{ color: 'black', transform: 'scaleX(-1)', marginLeft: '10px' }} />
          <MaximizeIcon style={{ transform: 'rotate(90deg)' }} />
          <MoreVertIcon style={{ transform: 'rotate(90deg)', marginLeft: '15px', fontSize: '25px' }} />
        </Button>
      </div>
    </div>
  );
}

export default ContactComponentofEmail;
