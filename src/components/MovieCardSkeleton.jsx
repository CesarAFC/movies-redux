import { CircularProgress, Container } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function MovieCardSkeleton() {
  return (
    <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',flexWrap: 'wrap', gap: 4, pt: 10}}>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={345} height={120} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={150} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={345} height={120} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={150} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={345} height={120} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={150} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={345} height={120} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={150} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={345} height={120} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={150} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={345} height={120} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={150} />
      </Stack>
    </Container>
  );
}