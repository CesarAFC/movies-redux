import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Container, Typography } from '@mui/material';

const NoImage = () => {
    return (
      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 345, height: 120}}>
        <ImageNotSupportedIcon/>
        <Typography variant='overline'>Image not available</Typography>
      </Container>
    )
  }

export default NoImage;
