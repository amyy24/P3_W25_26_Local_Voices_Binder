import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NavigationIcon from '@mui/icons-material/Navigation';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: 'fixed',
        width: '100%',
        bottom: 0,         // Positioniert sie am unteren Rand
    left: 0,  
        zIndex: 1000,  }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  icon={<NavigationIcon />} />
        <BottomNavigationAction  icon={<ExploreIcon />} />
        <BottomNavigationAction  icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}