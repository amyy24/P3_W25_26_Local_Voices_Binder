import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Filter Auswahl
function FilterSection({ title, options, selectedOption, onSelect, isCategory = false }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="subtitle1"
        sx={{ mb: 1, fontWeight: 600, color: 'black' }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isCategory ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(80px, 1fr))',
          gap: 1,
        }}
      >
        {options.map((option) => (
          <Button
            key={option}
            variant="contained"
            onClick={() => onSelect(option)}
            sx={{
              textTransform: 'none',
              bgcolor: selectedOption === option ? 'black' : 'white',
              color: selectedOption === option ? 'white' : 'black',
        
              '&:hover': {
                bgcolor: selectedOption === option ? 'black' : '#f0f0f0',
              },
            }}
          >
            {option}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default function FilterPopupDown({
  open,
  onClose,
  viewFilter,        //  Ansicht Personen
  categoryFilter,     //  Kategorie
  setViewFilter = () => {},
  setCategoryFilter = () => {},
}) {
  
  const [hasChanged, setHasChanged] = React.useState(false);

  // Auswahl der Pesonen
  const handleSelectView = (option) => {
    console.log('[FilterPopupDown] view clicked:', option);
    if (viewFilter === option) {
      setViewFilter('alle'); // von anfang an auf alle
    } else {
      setViewFilter(option); // wenn man auf eine andere ansicht klickt
    }
    setHasChanged(true);
  };
  
  // Auswahl der Kategorie
  const handleSelectCategory = (option) => {
    console.log('[FilterPopupDown] category clicked:', option);
    if (categoryFilter === option) {
      setCategoryFilter(''); // von anfang an leer
    } else {
      setCategoryFilter(option); // Auswahl einer neuen Kategorie
    }
    setHasChanged(true);
  };

  
// Zurücksetzen
  const handleReset = () => {
    setHasChanged(false);
    setViewFilter('alle');
    setCategoryFilter('');
  };

  // Speichern 
  const handleSave = () => {
    setHasChanged(false);
    onClose?.();
  };


  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          bgcolor: '#EDEDEB',
          color: 'black',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          p: 3,
         
          
        },
      }}
      
    >

      <Typography
        variant="h6"
        align="center"
        sx={{ mb: 3, fontWeight: 'bold', color: 'black' }}
      >
        Filter
      </Typography>

      <FilterSection
        title="Ansicht"
        options={['nur reisende', 'nur locals', 'alle']}
        selectedOption={viewFilter}
        onSelect={handleSelectView}
      />

      <FilterSection
        title="Themenbereiche"
        options={['alltag', 'kunst', 'kultur', 'natur', 'sport', 'essen']}
        selectedOption={categoryFilter}
        onSelect={handleSelectCategory}
        isCategory={true}
      />

      <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ mt: 2 }}>
        <Button
          variant="outlined"
          onClick={handleReset}
          sx={{
            flex: 1,
            textTransform: 'none',
            borderColor: 'black',
            bgcolor: 'white',
            color: '#51853C',
          }}
        >
          Zurücksetzen
        </Button>
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            flex: 1,
            textTransform: 'none',
            bgcolor: hasChanged ? '#51853C' : 'rgba(95, 119, 87, 0.50)',
            color: hasChanged ? 'white' : 'black',
          }}
        >
          Speichern
        </Button>
      </Stack>
    </Drawer>
  );
}