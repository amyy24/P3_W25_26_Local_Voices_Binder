import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';


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
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function BadgeAvatars({
  mainImage,      // großes Avatar
  badgeImage,
  title,
  subtitle,
  subtitleColor,
  infos,
      // kleines Avatar
}) {
  const navigate = useNavigate();

  return (
    <>
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
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2000,
      }}
    >
        
      <Box sx={{ textAlign: 'center', mt: 1 }}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar src={badgeImage}  />
        }
      >
        <Avatar src={mainImage} sx={{ width: 100, height: 100 }} />
      </StyledBadge>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" sx={{ color: subtitleColor || 'text.primary' }} // Orange für "Reisender", Schwarz für alles andere
  >
          {subtitle}
        </Typography>
      </Box>
      
      <Box sx={{ mt: 3, pl: 1 }}>
  {infos.map((info, index) => (
    <Box key={index} sx={{ mb: 1 }}>
      {info.title && (
        <Box
          sx={{
            display: 'flex', // Flexbox für horizontale Ausrichtung
            alignItems: 'center', // Vertikale Ausrichtung zentrieren
            justifyContent: 'space-between', // Platz zwischen den Elementen
            width: '100%', // Nimmt die gesamte Breite ein
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            {info.title}
          </Typography>
          {info.right && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center', // Vertikale Ausrichtung zentrieren
                gap: 0.5, // Abstand zwischen Icon und Text
              }}
            >
              {info.right.icon}
              <Typography variant="body2">{info.right.label}</Typography>
            </Box>
          )}
        </Box>
      )}
      {info.subtitle && (
        <Typography variant="body2" color="text.secondary">
          {info.subtitle}
        </Typography>
      )}
      
      {info.icons && (
        <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
          {info.icons.map((item, i) => (
            <Box 
            key={i} 
            sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
                }}
                >
              <Box
                sx={{
                color: info.title === "Thema" ? '#7194FF' : 'text.primary', // Blau für "Thema", Schwarz für alles andere
                }} 
                >
              {item.icon}
              </Box>
              <Typography variant="body2">{item.label}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  ))}
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#F05323',
      color: '#FFFFFF',
      borderRadius: 2,
      px: 4,
      textTransform: 'none',
      fontWeight: 500,
    }}
  >
    mich treffen
  </Button>
</Box>
</Box>
    
    
</>
  );
}
