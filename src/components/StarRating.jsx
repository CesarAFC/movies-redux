import { Stack, Typography } from '@mui/material'
import React from 'react'
import { CustomCheckbox } from './Ratings'

const StarRating = ({rate}) => {
  return (
    <Stack direction="row" spacing={1}>
    <CustomCheckbox fontSize='sm' color='success'/>
    <Typography sx={{ display: "inline-flex" }} variant="body2">
      {rate.toString().slice(0, 3)}
    </Typography>
  </Stack>
  )
}

export default StarRating