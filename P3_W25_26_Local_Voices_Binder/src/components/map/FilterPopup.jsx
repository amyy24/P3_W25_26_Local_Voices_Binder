import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TuneIcon from '@mui/icons-material/Tune';

export default function FilterPopupsmall({ onClick }) {
    
  return (
    <Stack direction="row" spacing={2} sx={{
        position: 'absolute',
        top: 80, // über der Navbar 
        left: 16,
        zIndex: 1001, }}
        
        >
      <Button variant="contained" startIcon={<TuneIcon />} sx={{backgroundColor: '#FFFFFF',
      color: '#000000',  borderRadius: 25,textTransform: 'none',fontWeight:700 }}onClick={onClick}>
        Filter 
      </Button>
    </Stack>
  );
}