import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { Container } from '@mui/material';


const Try = () => {
  return (
    <Container>
      <Splide aria-label="My Favorite Images" >
        <SplideSlide>
          <img src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </Container>
  );
}

export default Try