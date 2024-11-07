import { ThemeProvider } from '@mui/material/styles';
import { normalTheme, accessibleTheme } from './theme.js';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from './store/userSlice.js'
import { Outlet, Navigate } from "react-router-dom";
import { LoginStatus } from './lib/fetch';
import Navbar from './components/Navbar.jsx';
import Welcome from './route/Welcome';
import AccessibleButton from './components/AccessibleButton';

import './App.css';

function App() {
  const theme = useSelector((state) => state.theme.value)
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  useEffect(
    () => {
      const fetchUserStatus = async () => {
        console.log('fetchUserStatus')
        const response = await LoginStatus()
        if (response.ok) {
          dispatch(signIn())
        }
      }
      fetchUserStatus()
    }, [])

  return (
    <ThemeProvider theme={theme ? accessibleTheme : normalTheme}>
      {user ? <Navbar /> : null}
      {user ? <Outlet /> : <Welcome />}
    </ThemeProvider>
  )
}

export default App
