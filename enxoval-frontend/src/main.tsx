import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider, createTheme} from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

const darkTheme = createTheme({
  palette:{
    mode: 'dark',
    primary: {
      main: '#fff'
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    
  </StrictMode>,
)
