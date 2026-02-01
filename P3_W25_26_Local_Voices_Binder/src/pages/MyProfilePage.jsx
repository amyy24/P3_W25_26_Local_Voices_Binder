import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import me from '../assets/me.jpg';
import Verification from '../assets/verification.png';
import PersonIcon from '@mui/icons-material/Person';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MuseumIcon from '@mui/icons-material/Museum';
import SimpleBottomNavigation from '../components/layout/NavBar';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export function MyProfilePage() {
  const infos = [
    { title: "Lebe in", subtitle: "Berlin, Deutschland" },
    { title: "Spreche", subtitle: "Englisch, Deutsch" },
    { title: "offen für", icons: [{ icon: <PersonIcon /> }] },
    { title: "Thema", icons: [
        { icon: <ColorLensIcon />, label: "Kunst" },
        { icon: <MuseumIcon />, label: "Kultur" },
      ]},
    { title: "Über mich", subtitle: "Ich studiere Kunstgeschichte und interessiere mich für moderne Kunst. " },
  ];

  return (
    <Box
      sx={{
        px: 2,
        pt: { xs: '5vh', sm: '8vh' },
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      {/* Kopfzeile */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Profil
        </Typography>
        <EditIcon sx={{ fontSize: 28, cursor: 'pointer' }} />
      </Box>

      {/* Avatar + Badge + Infos */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={<SmallAvatar src={Verification} />}
        >
          <Avatar
            src={me}
            sx={{ width: { xs: 140, sm: 100 }, height: { xs: 140, sm: 100 } }}
          />
        </Badge>

        <Typography variant="h4" sx={{ mt: 1, fontSize: { xs: '1.8rem', sm: '2rem' }, fontWeight: 700 }}>
          Mia
        </Typography>
        <Typography variant="body2" sx={{ fontSize: { xs: '1.05rem', sm: '1rem' }, mt: 0.5, fontWeight: 600, color: '#51853C' }}>
          Reisende
        </Typography>

        {/* Infos */}
        <Box sx={{ mt: 1, width: '100%' }}>
          {infos.map((info, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              {info.title && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 600 }}>
                    {info.title}
                  </Typography>
                  {info.right && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {info.right.icon}
                      <Typography variant="body2" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                        {info.right.label}
                      </Typography>
                    </Box>
                  )}
                </Box>
              )}
              {info.subtitle && (
                <Typography variant="body2" color="#000000" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                  {info.subtitle}
                </Typography>
              )}
              {info.icons && (
                <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                  {info.icons.map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: info.title === 'Thema' ? '#7194FF' : 'text.primary' }}>
                      {item.icon}
                      {item.label && <Typography variant="body2" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>{item.label}</Typography>}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
      {/* Navbar am unteren Rand */}
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
        <SimpleBottomNavigation />
      </Box>
    </Box>
  );
}
