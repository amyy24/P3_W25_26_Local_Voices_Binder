import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Meeting from '../assets/Meeting.png';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MeetingInfoRow from '../components/profiles/Meeting';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SimpleBottomNavigation from '../components/layout/NavBar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export function MeetingPage() {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        pt: 2,
        pb: 8, // Platz lassen für die Navbar
      }}
    >
      {/* Überschrift */}
      <Typography variant="h5">Meeting Point</Typography>

      {/* Bild */}
      <Box sx={{ mt: 2 }}>
        <img
          src={Meeting}
          alt="Meeting"
          style={{
            width: '35%',
            borderRadius: '12px',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </Box>

      {/* Infos */}
      <Box sx={{ mt: 3, width: '35%' }}>
        <MeetingInfoRow icon={<ColorLensIcon />} title="Kunst" />
        <MeetingInfoRow icon={<AccessTimeIcon />} title="1 km" subtitle="Noch 10 min" />
        <MeetingInfoRow icon={<PersonIcon />} title="2 Personen (privat)" />
        <MeetingInfoRow
          icon={<LocationPinIcon />}
          title="Treffpunkt"
          subtitle="du gehst zu Emma"
          buttonRight={{
            icon: <ArrowForwardIosIcon />,
            link: "/route",
            
          }}
        />
      </Box>

      {/* Navbar am unteren Rand */}
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
        <SimpleBottomNavigation />
      </Box>
      <Button
    variant="contained"
    sx={{
      backgroundColor: '#EDEDEB',
      color: '#000000',
      borderRadius: 2,
      px: 4,
      textTransform: 'none',
      fontWeight: 500,
    }}
    onClick={() => navigate('/map')}
  >
    Abbrechen
  </Button>
    </Box>
  );
}
