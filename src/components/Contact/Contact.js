import React from 'react'
import './Contact.css'
// import { TextField } from '@mui/material'
import { Stack, TextField } from '@mui/material'
function Contact() {
    return (
        <div className='section-padding Contact '>
            <div className='container'>
                <div className='heading'>
                    <h1 className='mb-5'>Contact Us</h1>
                </div>
                <div className='row d-flex align-items-center '>
                    <div className='col-md-6 mt-3'>
                        <Stack spacing={4}>
                            <Stack direction='row' spacing={3}>
                                <TextField fullWidth label='First Name' variant='filled' size='small' className='cinput'  name='firstName' />
                                <TextField fullWidth label='Last Name' variant='filled' size='small' className='cinput'  name='lastName' />
                            </Stack>
                            <Stack direction='row' spacing={3}>
                                <TextField fullWidth label='Phone' variant='filled' size='small' className='cinput'  name='contact' />
                                <TextField fullWidth label='Email' variant='filled' size='small' className='cinput'  name='email' />
                            </Stack>
                            <Stack direction='row' >
                                <TextField label='Message' variant='filled' size='small' className='cinputm' fullWidth multiline rows={5}  name='message' />
                            </Stack>
                        </Stack>
                    </div>
                    <div className='col-md-6'></div>
                </div>
            </div>
        </div>
    )
}

export default Contact