import React, { useState } from 'react';
import axios from 'axios';
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function SendReferralEmail({setShowCreate,setState,getData}) {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'subject') {
            setSubject(value);
        } else if (name === 'description') {
            setDescription(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendEmailAPI(email, subject, description);

        setShowCreate(false);
        setState( { left: false });
        getData();
        toast.success('Email sent successfully!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const sendEmailAPI = async (email, subject, description) => {
        try {
            const response = await axios.post('http://localhost:3000/referrals', {
                email: email,
                subject: subject,
                description: description,
            });

            console.log('API Response:', response.data);

            setEmail('');
            setSubject('');
            setDescription('');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='email-container'>
                    <div className='email-header'>
                        <span className='new-message'>New Message</span>
                        <span className='minimize-icon'><MinimizeIcon /></span>
                        <span className='open-full-icon'><OpenInFullIcon style={{ fontSize: '14px' }} /></span>
                        <span className='close-icon'><CloseIcon style={{ fontSize: '17px' }} /></span>
                    </div>
                    <div className='recipients'>
                        <TextField
                            id="standard-basic"
                            label="Recipients"
                            variant="standard"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleChange}
                            required
                            style={{ width: '93%', marginLeft: '14px' }}
                        />
                    </div>
                    <div className='subject'>
                        <TextField
                            id="standard-basic"
                            label="Subject"
                            variant="standard"
                            value={subject}
                            onChange={handleChange}
                            style={{ width: '93%', marginLeft: '14px', marginTop: '10%' }}
                            name="subject"
                        />
                    </div>
                    <div className='email-description'>
                        <TextField
                            id="standard-multiline-static"
                            name="description"
                            multiline
                            label="Description"
                            rows={15.7}
                            style={{ width: '97%', marginLeft: '14px', marginTop: '3%' }}
                            variant="standard"
                            value={description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='email-footer'>
                        <Button
                            style={{ backgroundColor: '#0B57D0' }}
                            variant="contained"
                            type="submit"
                            endIcon={<SendIcon />}
                        >
                            Send
                        </Button>
                        <TextFormatIcon className='text-format' style={{ fontSize: '1.4rem' }} />
                        <AttachFileIcon className='attach-file' style={{ fontSize: '1.1rem' }} />
                        <InsertLinkIcon className='insert-link' style={{ fontSize: '1.2rem' }} />
                        <InsertEmoticonIcon className='insert-emoji' style={{ fontSize: '1.2rem' }} />
                        <AddToDriveIcon className='insert-drive' style={{ fontSize: '1.2rem' }} />
                        <InsertPhotoIcon className='insert-photo' style={{ fontSize: '1.2rem' }} />
                        <LockPersonIcon className='insert-lock' style={{ fontSize: '1.2rem' }} />
                        <EditIcon className='insert-edit' style={{ fontSize: '1.2rem' }} />
                        <MoreVertIcon className='more-option' style={{ fontSize: '1.2rem' }} />
                        <DeleteOutlineIcon className='delete-icon' style={{ fontSize: '1.3rem' }} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SendReferralEmail;
