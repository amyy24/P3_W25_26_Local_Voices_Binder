import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function MapPopup({
    title,             
    subtitle, 
    subtitleColor,          
    image,              
    leftIcons = [],     // Array von { icon: <IconComponent />, label: "Text" } für erste Zeile
    bottomIcons = [],   // Array für untere Icon+Text Zeile
    buttonIcon,    
    buttonLink,
    onClose       // Icon für den Button rechts
  }) {
    const theme = useTheme();
    const navigate = useNavigate();
  
    return (
      <Card sx={{ display: 'flex', width: 349, height:130 }}>
        {onClose && (
        <IconButton aria-label="close" onClick={() => navigate('/map')}
          size="small"
          onClose={() => setActiveMarker(null)}
          sx={{
            position: 'absolute',
            top: 4,
            right: 25,
            color: '#888', 
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>
      )}

        <CardMedia
          component="img"
          sx={{ width: '33.33%', objectFit: 'cover'}}
          image={image}
          alt={title}
        />
  
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '66.66%' }}>
          <CardContent sx={{ flex: '0 0 auto', pb: 0.5, pt: 1, }}>
            <Typography component="div" variant="h5">{title}</Typography>
            <Typography variant="subtitle1" component="div" sx={{ color: subtitleColor }}>
              {subtitle}
            </Typography>
          </CardContent>
  
          {leftIcons.length > 0 && (
            <Box sx={{ display: 'flex', gap: 2, pl:2.5, mt:-0.5 }}>
              {leftIcons.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {React.cloneElement(item.icon, { sx: { color: '#7194FF' } })}
                  <Typography variant="body2">{item.label}</Typography>
                </Box>
              ))}
            </Box>
          )}
  
          {bottomIcons.length > 0 && (
            <Box sx={{  display: 'flex', gap: 2, pl: 2.5, mt: 1 }}>
              {bottomIcons.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {React.cloneElement(item.icon, { sx: { color: '#000000' } })}
                  <Typography variant="body2">{item.label}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
  
        {buttonIcon && (
          <Box sx={{ display: 'flex', alignItems: 'center', pr: 1 }}>
            <IconButton aria-label="action"
             size="large"
             onClick={() => navigate(buttonLink)}
             >
              {buttonIcon}
            </IconButton>
          </Box>
        )}
      </Card>
    );
  }