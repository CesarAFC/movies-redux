import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const ProviderDetail = ({name, logo}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <img
            src={`https://image.tmdb.org/t/p/w500/${logo}`}
            width="40"
            height="40"
          />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default ProviderDetail