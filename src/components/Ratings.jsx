import { Box, Button, IconButton, Stack, styled, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import React from 'react'

export const CustomCheckbox = styled(StarRateIcon)(({ theme }) => ({
  color: theme.status.star,
}));


const Ratings = ({rate, totalVotes}) => {
    const formattedVotes = (totalVotes / 1000).toFixed(1) + "k";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mr: 2,
      }}
    >
      <Typography variant="button">Rating</Typography>
      <Button
        variant="text"
        // startIcon={<StarRateIcon sx={{display: 'flex'}}/>}
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#000",
          width: "86px",
          p: 0,
        }}
      >
        <div> 
          {/* <CustomCheckbox /> */}
          {/* <IconButton sx={{p: 0, pb: 1}} > */}
          <Stack sx={{alignItems: 'center', p: 0, pb: 0}} direction="row">
            <CustomCheckbox />
          {/* </IconButton> */}
          <Typography sx={{ display: "inline-flex" }} variant="h6">
            {rate.toString().slice(0, 3)}
          </Typography>
          <Typography variant="subtitle1">/10</Typography>
          </Stack>
        </div>
        <Typography variant="subtitle2">{formattedVotes}</Typography>
      </Button>
    </Box>
  );
}

export default Ratings