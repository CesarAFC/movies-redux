import { Box, Button, Stack, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomCheckbox } from './Ratings';
import StarRating from './StarRating';

const SimilarCard = ({title, rate, poster, id}) => {

    const navigate = useNavigate();

    const handleLearnMore = (e) => {
      navigate(`/movies/${id}`); 
    }
  return (
    <Box>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        width="200"
        height="300"
      />
      <StarRating rate={rate}/>
      <Typography sx={{width: 200}}>{title}</Typography>
      <Button size="small" onClick={handleLearnMore}>Learn More</Button>
    </Box>
  );
}

export default SimilarCard