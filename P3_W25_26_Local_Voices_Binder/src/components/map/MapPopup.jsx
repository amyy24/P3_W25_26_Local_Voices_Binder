import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export default function MapPopup({
    title,             
    subtitle,           
    image,              
    leftIcons = [],     // Array von { icon: <IconComponent />, label: "Text" } für erste Zeile
    bottomIcons = [],   // Array für untere Icon+Text Zeile
    buttonIcon          // Icon für den Button rechts
  }) {
    const theme = useTheme();
  
    return (
      <Card sx={{ display: 'flex', width: 350 }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={image}
          alt={title}
        />
  
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '66.66%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">{title}</Typography>
            <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
              {subtitle}
            </Typography>
          </CardContent>
  
          {leftIcons.length > 0 && (
            <Box sx={{ display: 'flex', gap: 2, pl: 1, pt: 1 }}>
              {leftIcons.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {item.icon}
                  <Typography variant="body2">{item.label}</Typography>
                </Box>
              ))}
            </Box>
          )}
  
          {bottomIcons.length > 0 && (
            <Box sx={{ display: 'flex', gap: 2, pl: 1, pt: 1 }}>
              {bottomIcons.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {item.icon}
                  <Typography variant="body2">{item.label}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
  
        {buttonIcon && (
          <Box sx={{ display: 'flex', alignItems: 'center', pr: 1 }}>
            <IconButton aria-label="action" size="large">
              {buttonIcon}
            </IconButton>
          </Box>
        )}
      </Card>
    );
  }