import { AppBar, Box, Toolbar, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Cabecalho() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '30rem' }}>
          <Box
            component="img"
            sx={{
              height: 60,
              width: 60,
              marginRight: '1rem',
              borderRadius: '50%',
            }}
            src="/images/logo_1.jpg"
          />
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontStyle: 'italic',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Enxoval Gabriel && Maria
          </Typography>
        </Box>
        
        <TextField
            size="small"
            placeholder="Pesquisar"
            variant="outlined"
            sx={{ marginRight: '1rem' }}
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <IconButton>
                    <SearchIcon />
                    </IconButton>
                </InputAdornment>
                ),
            }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Cabecalho;
