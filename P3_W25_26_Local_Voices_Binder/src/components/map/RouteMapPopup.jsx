import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function IconLabelButtons() {
    const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={2} sx={{
        position: 'absolute',
        bottom: 70, // über der Navbar (falls Navbar ~56px hoch)
        left: 16,
        zIndex: 1001, }}
        >
      <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={{backgroundColor: '#FFFFFF',
      color: '#000000', }}onClick={() => navigate('/meeting')}>
        you're meeting
      </Button>
    </Stack>
  );
}