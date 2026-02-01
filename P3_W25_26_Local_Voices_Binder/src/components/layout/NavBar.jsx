import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NavigationIcon from '@mui/icons-material/Navigation';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



export default function SimpleBottomNavigation() {
  const location = useLocation();
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Pfadabhängig active Icon setzen
    if (location.pathname === '/map') {
      setValue(1); // mittleres Icon aktiv
    } else if (location.pathname === '/route', '/meeting') {
      setValue(0);
    } else if (location.pathname === '/map') {
      setValue(2);
    }
  }, [location.pathname]);

  return (
    <Box sx={{ position: 'fixed',
        width: '100%',
        bottom: 0,         
    left: 0,  
        zIndex: 1000,  }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (newValue === 0) navigate('/map');       // Navigation Icon
          else if (newValue === 1) navigate('/map');    // Explorer Icon
          else if (newValue === 2) navigate('/map');
        }}
        sx={{
          backgroundColor: '#EDEDEB',
          '& .MuiBottomNavigationAction-root.Mui-selected': {
            color: '#F05323', // aktives Icon + Label
          },
          '& .MuiBottomNavigationAction-root': {
            color: '#000000', // inaktive Farbe optional schwarz
          },
        }}
      >
        <BottomNavigationAction  icon={<NavigationIcon />}disableRipple sx={{
    '&.Mui-selected': {
      outline: 'none',  // entfernt Fokus-Outline
      boxShadow: 'none',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  }}/>
        <BottomNavigationAction  icon={<ExploreIcon />} disableRipple sx={{
    '&.Mui-selected': {
      outline: 'none',  // entfernt Fokus-Outline
      boxShadow: 'none',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  }}/>
        <BottomNavigationAction  icon={<PersonIcon />} disableRipple sx={{
    '&.Mui-selected': {
      outline: 'none',  // entfernt Fokus-Outline
      boxShadow: 'none',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  }}/>
      </BottomNavigation>
    </Box>
  );
}