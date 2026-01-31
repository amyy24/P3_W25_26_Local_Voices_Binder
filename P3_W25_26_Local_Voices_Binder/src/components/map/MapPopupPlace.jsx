import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

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

  const handleButtonClick = () => {
    setClicked(true);          //  Button wird schwarz
    if (onButtonClick) {
      onButtonClick();         //  MePin Icon aktivieren
    }
  };
  
  return (
    <Card sx={{ display: 'flex', width: 349, height:130 }}>
      {onClose && (
        <IconButton
          size="small"
          onClick={onClose}
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
      {/* Bild oben */}
      {image && (
        <CardMedia
          component="img"
          sx={{ width: '33.33%', objectFit: 'cover' }}
          image={image}
          alt={title}
        />
      )}

      {/* Überschrift + Text */}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '66.66%', p: 1, justifyContent: 'space-between' }}>
        {/* Text oben */}
        <Box>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>

        {/* Button unten rechts */}
        {buttonText && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
