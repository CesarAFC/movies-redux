import { CircularProgress, Container } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SimilarMovieSkeleton() {
  return (
    <Container>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={200} height={300} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={150} />
      </Stack>
    </Container>
  );
}