import React from 'react';
import './style.css';
import EmailList from './website-components/EmailList';
import AvatarList from './website-components/AvatarList';

function Home({referral}) {
 
    return (
        <div>
              <AvatarList/>
            <EmailList referral={referral} />
        </div>
    );
}

export default Home;
