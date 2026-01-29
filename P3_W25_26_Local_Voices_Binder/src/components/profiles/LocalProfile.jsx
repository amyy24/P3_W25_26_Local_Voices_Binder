import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


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
  infos,
      // kleines Avatar
}) {
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
      <IconButton aria-label="close">
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
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
      
      <Box sx={{ mt: 3, pl: 1 }}>
  {infos.map((info, index) => (
    <Box key={index} sx={{ mb: 1 }}>
      <Typography variant="subtitle1" fontWeight={600}>
        {info.title}
      </Typography>

      {info.subtitle && (
        <Typography variant="body2" color="text.secondary">
          {info.subtitle}
        </Typography>
      )}

    {info.right && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5,
             justifyContent: 'flex-end' }}>
          {info.right.icon}
          <Typography variant="body2">{info.right.label}</Typography>
        </Box>
      )}
      
      {info.icons && (
        <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
          {info.icons.map((item, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {item.icon}
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
