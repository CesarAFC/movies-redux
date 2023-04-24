import { Box, Button, Stack, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SimilarCard = ({title, rate, poster, id}) => {

    const navigate = useNavigate();

    const handleLearnMore = (e) => {
      navigate(`/movies/${id}`); 
    }
  return (
    <Box>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        //src={`https://image.tmdb.org/t/p/w500/zAurB9mNxfYRoVrVjAJJwGV3sPg.jpg`}
        width="200"
        height="300"
      />
      <Stack direction="row" spacing={1}>
        <StarRateIcon fontSize='sm' color='success'/>
        <Typography sx={{ display: "inline-flex" }} variant="body2">
          {rate.toString().slice(0, 3)}
        </Typography>
      </Stack>
      <Typography sx={{width: 200}}>{title}</Typography>
      <Button size="small" onClick={handleLearnMore}>Learn More</Button>
    </Box>
  );
}

export default SimilarCard