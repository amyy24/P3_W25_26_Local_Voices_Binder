import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function MapPopup({
  title,
  subtitle,
  image,
  buttonText, 
}) {
  const theme = useTheme();
  const [clicked, setClicked] = useState(false); // Zustand für Button-Farbe

  const handleButtonClick = () => {
    setClicked(!clicked); // Toggle
  };
  return (
    <Card sx={{ display: 'flex', width: 350 }}>
      
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
