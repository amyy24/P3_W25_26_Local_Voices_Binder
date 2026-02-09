import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
 
// aktiven Filter auf der Karte anzeigen als kleiner Button
export default function FilterPopupCategory({ viewFilter, categoryFilter }) {
  
  // Wenn beide leer/alle sind, zeige nichts
  if (viewFilter === "alle" && !categoryFilter) {
    return null;
  }
  
  return (
    <Stack 
      direction="row" 
      spacing={1} 
      sx={{
        position: 'absolute',
        top: 80,
        left: 120,
        zIndex: 1001,
      }}
    >
      {viewFilter !== "alle" && ( // Zeigt Auswahl der Personen
        <Box sx={{
          backgroundColor: '#EDEDEB',
          color: '#000000',
          borderRadius: 25,
          padding: '8px 16px',
          fontWeight: 700,
          fontSize: '14px',
        }}>
          {viewFilter}
        </Box>
      )}
      
      {categoryFilter && ( // Zeigt Auswahl der Kategorie
        <Box sx={{
          backgroundColor: '#EDEDEB',
          color: '#000000',
          borderRadius: 25,
          padding: '8px 16px',
          fontWeight: 700,
          fontSize: '14px',
        }}>
          {categoryFilter}
        </Box>
      )}
    </Stack>
  );
}