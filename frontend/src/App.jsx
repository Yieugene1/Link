import { ThemeProvider } from '@mui/material/styles';
import { normalTheme, accessibleTheme } from './theme.js';
import { useSelector } from 'react-redux'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import AccessibleButton from './components/AccessibleButton';
import './App.css';

function App() {
  const theme = useSelector((state) => state.theme.value)
  //const user = useSelector((state) => state.user.value)
  let user = true
  
  return (
    <ThemeProvider theme={theme ? accessibleTheme : normalTheme}>
      {user? <Navbar /> : null}
      <div>
        <Outlet />
      </div>
      <AccessibleButton />
    </ThemeProvider>
  )
}

export default App
