import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { normalTheme, accessibleTheme } from './theme';
import { useState } from 'react';
import { Button } from '@mui/material';
import AccessibleButton from './components/AccessibleButton';



function App(){
  const [isAccessibleMode, setIsAccessibleMode] = useState(false);
  const toggleTheme = () => {
    setIsAccessibleMode(!isAccessibleMode);
  };

  return (
    <ThemeProvider theme={isAccessibleMode ? accessibleTheme : normalTheme}>
      <Router>
        <AccessibleButton isAccessibleMode={isAccessibleMode} toggleTheme={toggleTheme} />
        <nav style={{color :"primary"}}>
          <Link to="/" >Home</Link>
          <Link to="/login" >Login</Link>
          <Link to="/register" >Register</Link>
          <Link to="/profile" >Profile</Link> {/* 添加 Profile 链接 */}
        </nav>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
