import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function MapPopupPlace({
  title,
  subtitle,
  image,
  buttonText,
  onButtonClick, 
  onClose

}) {
  const theme = useTheme();
  const [clicked, setClicked] = useState(false); // Zustand für Button-Farbe
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setClicked(true);          //  Button wird schwarz
    if (onButtonClick) {
      onButtonClick();         //  MePin Icon aktivieren
    }
  };
  
  return (
    <Card sx={{ display: 'flex', width: 349, height:130, borderRadius:5, position: 'relative', // wichtig für absolute Kinder
      overflow: 'visible' }}>
      {onClose && (
  <IconButton
    aria-label="close"
    size="small"
    onClick={onClose}
    sx={{
      position: 'absolute',
      top: 6,
      right: 6,
      color: '#888',
      zIndex: 10,
    }}
  >
    <CloseIcon />
  </IconButton>
)}

      {/* Bild oben */}
      {image && (
        <CardMedia
          component="img"
          sx={{ width: '33.33%', objectFit: 'cover',  borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5 }}
          image={image}
          alt={title}
        />
      )}

      {/* Überschrift + Text */}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '66.66%', p: 1 }}>
  {/* Text oben */}
  <Box>
    <Typography component="div" variant="h5" sx={{ fontWeight: 700 }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body3" color="text.secondary">
        {subtitle}
      </Typography>
    )}
  </Box>

  {/* Button direkt nach Text */}
  {buttonText && (
    <Box sx={{  position: 'absolute', bottom: 6, right: 10 }}>
      <Button
        onClick={handleButtonClick}
        sx={{
          backgroundColor: clicked ? '#000000' : '#EDEDEB',
          color: clicked ? '#FFFFFF' : '#000000',
          textTransform: 'none',
        }}
      >
        {buttonText}
      </Button>
    </Box>
  )}
</Box>

    </Card>
  );
}
