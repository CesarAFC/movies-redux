import { Box, Button, Typography } from '@mui/material';
import { SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';

const SimilarCard = ({title, rate, poster, id}) => {

    const navigate = useNavigate();

    const handleLearnMore = (e) => {
      navigate(`/movies/${id}`); 
    }
  return (
    <SplideSlide>
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
    </SplideSlide>
  );
}

export default SimilarCard