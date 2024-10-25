import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { normalTheme, accessibleTheme } from './theme';
import { useState } from 'react';
import AccessibleButton from './components/AccessibleButton';
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';


function App(){
  const [isAccessibleMode, setIsAccessibleMode] = useState(false);
  const toggleTheme = () => {
    setIsAccessibleMode(!isAccessibleMode);
  };

  return (
    <ThemeProvider theme={isAccessibleMode ? accessibleTheme : normalTheme}>
      <Router>
        <AccessibleButton isAccessibleMode={isAccessibleMode} toggleTheme={toggleTheme} />
        <Navbar />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  )
}

export default App
