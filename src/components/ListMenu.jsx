import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import GradeIcon from '@mui/icons-material/Grade';
import MovieIcon from '@mui/icons-material/Movie';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

export default function ListMenu({toggleDrawer}) {
    const navigate = useNavigate();
    const handleTopRated = () => {
        toggleDrawer(false);
        navigate('/top-rated');
    }
    const handleUpcoming = () => {
        toggleDrawer(false);
        navigate('/upcoming');
    }
    const handleFavorites = () => {
        toggleDrawer(false);
        navigate('/my-favorites');
    }
  return (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleDrawer(false)}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Movies" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleTopRated}>
              <ListItemIcon>
                <GradeIcon />
              </ListItemIcon>
              <ListItemText primary="Top Rated" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleUpcoming}>
              <ListItemIcon>
                <MovieIcon />
              </ListItemIcon>
              <ListItemText primary="Upcoming" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton onClick={handleFavorites}>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Other" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}