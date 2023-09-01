import React from 'react';
import Avatar from '@mui/material/Avatar';


const commonStyle = {
    backgroundColor: 'white',

}

const textStyle = {
    color: 'white',
    marginTop: '5px',
}

const heading = {
    margin: '15px',
    color: 'white',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px'
}


function AvatarList() {
    return (
        <div style={{ marginTop: '10px' }}>
            <div style={heading}>
                <span>Our Esteemed Partners</span>
            </div>
            <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <li className='list-item-hover'>
                    <a href="https://www.amazon.in/">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/color/48/amazon.png"
                            style={commonStyle}
                        />
                        <div style={textStyle}>Amazon</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://open.spotify.com/?">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/color/48/spotify--v1.png"
                            style={commonStyle}
                        />
                        <div style={textStyle}>Spotify</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://www.netflix.com/in/">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/color/48/netflix-desktop-app--v1.png"
                            sx={{ width: 45, height: 45 }} />
                        <div style={textStyle}>Netflix</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://www.adobe.com/in/">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/external-justicon-flat-justicon/64/external-adobe-social-media-justicon-flat-justicon.png"
                        />
                        <div style={textStyle}>Adobe</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://www.tesla.com/">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/color/48/tesla-logo.png"
                            style={commonStyle} />
                        <div style={textStyle}>Tesla</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://www.google.com/">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/color/48/google-logo.png"
                            style={commonStyle} />
                        <div style={textStyle}>Google</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://www.microsoft.com/en-in">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/color/48/microsoft.png"
                            sx={{ width: 45, height: 45 }} />
                        <div style={textStyle}>Microsoft</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://www.facebook.com/">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/color/48/facebook.png"
                            sx={{ width: 45, height: 45 }} />
                        <div style={textStyle}>Facebook</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://www.instagram.com/">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/fluency/48/instagram-new.png"
                            sx={{ width: 45, height: 45 }} />
                        <div style={textStyle}>Instagram</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://www.hotstar.com/in/home?ref=%2Fin">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/color/48/hotstar.png"
                            sx={{ width: 45, height: 45 }} />
                        <div style={textStyle}>Hotstar</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/color/48/twitter--v1.png"
                            style={commonStyle}
                            sx={{ width: 40, height: 40 }} />
                        <div style={textStyle}>Twitter</div>
                    </a>
                </li>
                <li className='list-item-hover'>
                    <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_170_mkw_sPL46i7Lo-dc?gclid=CjwKCAjw_uGmBhBREiwAeOfsd3zJhw_J8uZgVLhFZbvBf5b1oPRxObWe2t2gypuyKifD_Am5MjuZIxoCH-4QAvD_BwE&mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9300952_x__adext__ptid_kwd-61602341">
                        <Avatar
                            alt="Travis Howard"
                            src="https://img.icons8.com/color/48/amazon-prime-video.png"
                            sx={{ width: 45, height: 45 }} />
                        <div style={textStyle}>Prime +</div>
                    </a>
                </li>
            </ul>
        </div>

    );
}

export default AvatarList