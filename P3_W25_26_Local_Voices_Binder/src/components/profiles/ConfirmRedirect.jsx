import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ConfirmRedirectDialog({
  open,
  onClose,
  to = '/meeting',
  message = 'Treffen wird vorbereitet',
  duration = 3000,
}) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!open) return;

    const t = setTimeout(() => {
      onClose?.();
      navigate(to);
    }, duration);

    return () => clearTimeout(t);
  }, [open, duration, navigate, onClose, to]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 10000,   // höher als Leaflet
      }}
      container={() => document.body}  // 🔥 WICHTIG
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0,0,0,0.85)',
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: '#fff',
          opacity: 1,
        },
      }}
    >
      <DialogContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Der Box-Hintergrund sorgt dafür, dass das Icon nicht durchsichtig wirkt */}
        <Box
          sx={{
            backgroundColor: 'white', // Deckfläche hinter dem Icon
            borderRadius: 3,
            px: 6,
            py: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            boxShadow: 3, // optional für 3D-Effekt
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 120, color: '#2e7d32' }} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
