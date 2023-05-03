import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Container, Typography } from '@mui/material';

const NoImage = ({width, height}) => {
    return (
      <Container disableGutters sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: width, height: height, minWidth: width}}>
        <ImageNotSupportedIcon/>
        <Typography variant='overline'>Image not available</Typography>
      </Container>
    )
  }

export default NoImage;
