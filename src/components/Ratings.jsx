import { Button, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import React from 'react'

const Ratings = ({rate, totalVotes}) => {
    const formattedVotes = (totalVotes / 1000).toFixed(1) + "k";
  return (
    <Button
      variant="text"
      sx={{ mr: 2, display: "flex", flexDirection: "column", color: "#000" }}
    >
      <Typography variant="button">Rating</Typography>
      <div>
        <StarRateIcon />
        <Typography sx={{ display: "inline-flex" }} variant="h6">
          {rate.toString().slice(0, 3)}
        </Typography>
        <span>/10 </span>
      </div>
      <Typography variant='subtitle2'>{formattedVotes}</Typography>
    </Button>
  );
}

export default Ratings