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
import Divider from '@mui/material/Divider';

export function MeetingPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        pt: { xs: 3, sm: 2 },
        pb: 12, // Platz für Navbar
        px: { xs: 2, sm: 4 },
        boxSizing: 'border-box',
      }}
    >
      {/* Überschrift */}
      <Typography variant="h4" sx={{ fontWeight: 700, mt: 1 }}>
        you're meeting
      </Typography>

      {/* Bild */}
      <Box sx={{ mt: 3, width: { xs: '90%', sm: '60%', md: '35%' }, display: 'flex', justifyContent: 'center' }}>
        <img
          src={Meeting}
          alt="Meeting"
          style={{
            width: '70%',
            maxWidth: 420,
            borderRadius: 12,
            display: 'block',
          }}
        />
      </Box>

      {/* Infos */}
      <Box sx={{ mt: 1, width: { xs: '95%', sm: '60%', md: '35%' } }}>
        <MeetingInfoRow icon={<ColorLensIcon />} title="Kunst" />
        <Divider sx={{ mb: 3, borderColor: '#EDEDEB' }} />
        <MeetingInfoRow icon={<AccessTimeIcon />} title="1 km" subtitle="Noch 10 min" />
        <Divider sx={{ mb: 3, borderColor: '#EDEDEB' }} />
        <MeetingInfoRow icon={<PersonIcon />} title="2 Personen (privat)" />
        <Divider sx={{ mb: 3, borderColor: '#EDEDEB' }} />
        <MeetingInfoRow
          icon={<LocationPinIcon />}
          title="Treffpunkt"
          subtitle="du gehst zu Emma"
          buttonRight={{
            icon: <ArrowForwardIosIcon />,
            link: '/route',
          }}
        />
      </Box>

      {/* Action Buttons */}
      <Box sx={{ mt: 3, width: { xs: '95%', sm: '60%', md: '35%' }, display: 'flex', gap: 2, justifyContent: 'center' }}>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#EDEDEB',
      color: '#000000',
      borderRadius: 2,
      px: 4,
      py: { xs: 1.25, sm: 0.75 },
      textTransform: 'none',
      fontWeight: 500,
      fontSize: { xs: '1.05rem', sm: '1rem' },
      
      maxWidth: 360,
    }}
    onClick={() => navigate('/map')}
  >
    Abbrechen
  </Button>
</Box>

      {/* Navbar am unteren Rand */}
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
        <SimpleBottomNavigation />
      </Box>
    </Box>
  );
}