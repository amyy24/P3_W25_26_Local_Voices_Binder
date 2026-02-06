import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import ConfirmRedirect from './ConfirmRedirect';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function BadgeAvatars({
  mainImage,      
  badgeImage,
  title,
  subtitle,
  subtitleColor,
  infos,
  meetingRoute,
  buttonColor = '#F05323',
  
}) {
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleMeetClick = () => {
    setConfirmOpen(true);
  };

  return (
    <>
      {/* Close-Button oben rechts bleibt fixiert */}
      <Box
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 3000,
        }}
      >
        <IconButton aria-label="close" onClick={() => navigate('/map')}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Vollflächiger Container, Inhalt zentriert */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0, // top:0, right:0, bottom:0, left:0
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',            // zentriert vertikal
          px: 2,
          py: { xs: '5vh', sm: '8vh', md: 6 },            // Abstand für sehr kleine Bildschirme
          overflowY: 'auto',               // erlaubt scrollen, falls nötig
          zIndex: 2000,
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 520,
            bgcolor: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={<SmallAvatar src={badgeImage} />}
            >
              <Avatar
                src={mainImage}
                sx={{
                  width: { xs: 140, sm: 100 },   // größer auf iPhone (xs)
                  height: { xs: 140, sm: 100 },
                }}
              />
            </StyledBadge>

            <Typography
              variant="h4"
              sx={{
                mt: 1,
                fontSize: { xs: '1.8rem', sm: '2rem' }, // responsive
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: subtitleColor || 'text.primary',
                fontSize: { xs: '1.05rem', sm: '1rem',fontWeight: 600 },
                mt: 0.5,
              }}
            >
              {subtitle}
            </Typography>
          </Box>

          <Box sx={{ mt: 1, width: '100%' }}>
            {infos.map((info, index) => (
              <Box key={index} sx={{ mb: 1 }}>
                {info.title && (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <Typography variant="body1" fontWeight="bold"sx={{ fontSize: '1.rem', fontWeight: 600 }}>
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
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Box sx={{ color: info.title === 'Thema' ? '#7194FF' : 'text.primary' }}>
                          {item.icon}
                        </Box>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                          {item.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, width: '100%' }}>
            <Button
              variant="contained"
              disabled={!meetingRoute}
              sx={{
                backgroundColor: buttonColor,
                color: '#FFFFFF',
                borderRadius: 2,
                px: { xs: 5, sm: 4 },
                py: { xs: 1.25, sm: 0.75 },
                textTransform: 'none',
                fontWeight: 600,
                fontSize: { xs: '1.05rem', sm: '1rem' }, // größer auf Mobile
                width: { xs: '100%', sm: 'auto' },
                maxWidth: 360,
              }}
              onClick={handleMeetClick}
            >
              mich treffen
            </Button>
          </Box>
        </Box>

        {meetingRoute && (  // NEU: ConfirmRedirect nur rendern wenn Route existiert
          <ConfirmRedirect
            open={confirmOpen}
            onClose={() => setConfirmOpen(false)}
            to={meetingRoute}
            duration={3000}
          />
        )}
      </Box>
      
      
    </>
  );
}