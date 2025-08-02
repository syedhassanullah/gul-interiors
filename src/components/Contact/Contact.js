import React from 'react'
import './Contact.css'
// import { TextField } from '@mui/material'
import { Stack, TextField } from '@mui/material'
function Contact() {
    return (
        <div className='section-padding Contact'>
            <div className='container'>
                <div className='heading'>
                    <h1 className='mb-5'>Contact Us</h1>
                </div>
                <div className='row d-flex align-items-center '>
                    <div className='col-md-6 mt-5'>
                        <Stack spacing={5}>
                            <Stack direction='row' spacing={2}>
                                <TextField fullWidth label='First Name' variant='outlined' size='small' className='cinput'  name='firstName' />
                                <TextField fullWidth label='Last Name' variant='outlined' size='small' className='cinput'  name='lastName' />
                            </Stack>
                            <Stack direction='row' spacing={2}>
                                <TextField fullWidth label='Phone' variant='outlined' size='small' className='cinput'  name='contact' />
                                <TextField fullWidth label='Email' variant='outlined' size='small' className='cinput'  name='email' />
                            </Stack>
                            <Stack direction='row' >
                                <TextField label='Message' variant='outlined' size='small' className='cinputm' fullWidth multiline rows={4}  name='message' />
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