import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function ConfirmRedirectDialog({
  open,
  onClose,
  to = '/meeting',
  duration = 100,
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
      container={() => document.body}  
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
          <TaskAltIcon sx={{ fontSize: 120, color: '#51853C' }} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
