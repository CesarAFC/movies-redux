import { Typography } from '@mui/material';

export default function CreditList({name, character}) {

  return (
    <div>
      <Typography sx={{fontWeight: 700}} variant="subtitle2">{character}</Typography>
      <Typography variant="caption">{name}</Typography>
    </div>
  );
}