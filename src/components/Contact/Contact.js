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
                                <TextField fullWidth label='First Name' variant='filled' size='small' className='cinput' name='firstName' />
                                <TextField fullWidth label='Last Name' variant='filled' size='small' className='cinput' name='lastName' />
                            </Stack>
                            <Stack direction='row' spacing={3}>
                                <TextField fullWidth label='Phone' variant='filled' size='small' className='cinput' name='contact' />
                                <TextField fullWidth label='Email' variant='filled' size='small' className='cinput' name='email' />
                            </Stack>
                            <Stack direction='row' >
                                <TextField label='Message' variant='filled' size='small' className='cinputm' fullWidth multiline rows={5} name='message' />
                            </Stack>
                        </Stack>
                    </div>
                    <div className='col-md-6'>
                        <div
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.92847499191!2d67.01302187515208!3d24.862302377928007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9733855d9d%3A0x475698f8ef510ec9!2sGul%20Interiors!5e1!3m2!1sen!2s!4v1790314890144!5m2!1sen!2s"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact