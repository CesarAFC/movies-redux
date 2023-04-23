import * as React from 'react';
import Drawer from '@mui/material/Drawer';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListMenu from './ListMenu';


export default function AppMenu() {
  const [toggle, setToggle] = React.useState(false);

  const toggleDrawer = ( open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setToggle( open );
  };

  return (
    <div>
        <React.Fragment key={'left'}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={'left'}
            open={toggle}
            onClose={toggleDrawer(false)}
          >
            <ListMenu toggleDrawer={toggleDrawer(false)} />
          </Drawer>
        </React.Fragment>
    </div>
  );
}