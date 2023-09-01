import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendReferralEmail from './SendReferralEmail';
import CreateIcon from '@mui/icons-material/Create';

function ComposeButton({showCreate,setShowCreate,setState,getData}) {

  const toggleCreate = () => {
    setShowCreate(!showCreate);
  };

  return (
    <div>
      <Button
        style={{
          paddingTop: '15px',
          paddingBottom: '15px',
          paddingInline: '25px',
          borderRadius: '20px',
          backgroundColor: '#C2E7FF',
          color: 'black',
        }}
        onClick={toggleCreate}
        variant="contained"
      >
        <CreateIcon style={{ marginRight: '18px' }} />
        Compose
      </Button>
      <div className={`create-container ${showCreate ? 'visible' : ''}`}>
        <SendReferralEmail setShowCreate={setShowCreate} setState={setState} getData={getData}/>
      </div>
    </div>
  );
}

export default ComposeButton;
