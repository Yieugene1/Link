import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { normalTheme, accessibleTheme } from './theme.js';
import { useSelector } from 'react-redux'
import './App.css';

function App() {
  const theme = useSelector((state) => state.theme.value)

  return (
    <ThemeProvider theme={theme ? accessibleTheme : normalTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
