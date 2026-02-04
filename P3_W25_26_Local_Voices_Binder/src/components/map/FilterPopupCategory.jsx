import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

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
      {viewFilter !== "alle" && (
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
      
      {categoryFilter && (
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