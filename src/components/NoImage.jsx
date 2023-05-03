import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Container, Typography } from '@mui/material';

const NoImage = ({width, height}) => {
    return (
      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: width, height: height}}>
        <ImageNotSupportedIcon/>
        <Typography variant='overline'>Image not available</Typography>
      </Container>
    )
  }

export default NoImage;
