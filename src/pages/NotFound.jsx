import { Button } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageComponent from '../components/PageComponent'

const NotFound = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/')
    }
  return (
    <PageComponent title=''>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: 400, justifyContent: 'center'}}>
            <Typography variant='h1'>Opps!</Typography>
            <Typography>The page you are looking for does not exist.</Typography>
            <Button variant="contained" onClick={handleHome} sx={{width: '50%', mt: 2}}>Got to Home</Button>
        </Box>
    </PageComponent>
  )
}

export default NotFound