import { ThemeProvider } from '@mui/material/styles';
import { normalTheme, accessibleTheme } from './theme.js';
import { useSelector } from 'react-redux'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  const theme = useSelector((state) => state.theme.value)

  return (
    <ThemeProvider theme={theme ? accessibleTheme : normalTheme}>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
