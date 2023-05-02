import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { Container } from '@mui/material';


const SliderMovies = ({children}) => {
  return (
    <Container>
      <Splide>
        <SplideSlide>
            {children}
        </SplideSlide>
      </Splide>
    </Container>
  );
}

export default SliderMovies;