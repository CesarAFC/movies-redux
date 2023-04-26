import { Container, Typography } from '@mui/material'
import React from 'react'

const PageComponent = ({children, title}) => {
  return (
    <Container>
    <Typography variant='h3' sx={{textAlign: 'center', fontWeight: 700}} pb={2}>{title}</Typography>
    <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',flexWrap: 'wrap', gap: 2}} >
        {children}
    </Container>
  </Container>
  )
}

export default PageComponent